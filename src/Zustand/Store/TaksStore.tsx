import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

export interface Tarefa {
  id: string;
  done: boolean;
  title: string;
  description?: string;
  date: string;
  priority: "baixa" | "média" | "alta";
  category: string;
  overdue?: boolean;
}

interface TasksStore {
  tarefas: Tarefa[];
  concluidas: number;
  total: number;
  filter: "todas" | "pendentes" | "concluidas";
  setFilter: (filter: "todas" | "pendentes" | "concluidas") => void;
  setTarefas: (tarefas: Tarefa[]) => void;
  toggleConcluida: (id: string) => void;
  loadTasks: () => Promise<void>;
  addTask: (tarefa: Omit<Tarefa, "id" | "done">) => void;
}

export const useTasksStore = create<TasksStore>()(
  persist(
    (set, get) => ({
      tarefas: [],
      concluidas: 0,
      total: 0,
      filter: "todas",
      setFilter: (filter) => set({ filter }),

      setTarefas: (tarefas: Tarefa[]) =>
        set(() => ({
          tarefas,
          concluidas: tarefas.filter((t) => t.done).length,
          total: tarefas.length,
        })),

      toggleConcluida: (id: string) =>
        set((state) => {
          const tarefas = state.tarefas.map((t) =>
            t.id === id ? { ...t, done: !t.done } : t
          );
          return {
            tarefas,
            concluidas: tarefas.filter((t) => t.done).length,
            total: tarefas.length,
          };
        }),

      loadTasks: async () => {
        try {
          const res = await fetch("http://localhost:8000/api/tasks");
          const data: Tarefa[] = await res.json();

          const now = new Date();

          const mapped = data.map((t) => {
            const vencimentoDate = new Date(t.date);
            return {
              ...t,
              overdue: vencimentoDate < now,
            };
          });

          set({
            tarefas: mapped,
            concluidas: mapped.filter((t) => t.done).length,
            total: mapped.length,
          });
        } catch (error) {
          console.error("Erro ao carregar tarefas:", error);
        }
      },

      addTask: (novaTarefa) =>
        set((state) => {
          const tarefaComId: Tarefa = {
            ...novaTarefa,
            id: uuidv4(),
            done: false,
          };
          const tarefas = [...state.tarefas, tarefaComId];
          return {
            tarefas,
            concluidas: tarefas.filter((t) => t.done).length,
            total: tarefas.length,
          };
        }),
    }),
    {
      name: "tasks-storage",
    }
  )
);

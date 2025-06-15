import { create } from "zustand";

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

interface RawTaskFromDB {
  id: string;
  titulo: string;
  descricao?: string;
  prioridade: "baixa" | "média" | "alta" | "media";
  categoria: string;
  vencimento: string;
  done?: boolean;
}

interface TasksStore {
  tarefas: Tarefa[];
  concluidas: number;
  total: number;
  setTarefas: (tarefas: Tarefa[]) => void;
  toggleConcluida: (id: string) => void;
  loadTasks: () => Promise<void>;
  addTask: (tarefa: Tarefa) => void; // nova função
}

export const useTasksStore = create<TasksStore>((set, get) => ({
  tarefas: [],
  concluidas: 0,
  total: 0,

  setTarefas: (tarefas) =>
    set(() => ({
      tarefas,
      concluidas: tarefas.filter((t) => t.done).length,
      total: tarefas.length,
    })),

  toggleConcluida: (id) =>
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
      const data: RawTaskFromDB[] = await res.json();

      const mapped: Tarefa[] = data.map((t) => {
        const prioridade =
          t.prioridade.toLowerCase() === "media"
            ? "média"
            : (t.prioridade as "baixa" | "média" | "alta");

        const vencimentoDate = new Date(t.vencimento);
        const now = new Date();
        const overdue = vencimentoDate < now;

        return {
          id: t.id,
          done: t.done ?? false,
          title: t.titulo,
          description: t.descricao,
          date: t.vencimento,
          priority: prioridade,
          category: t.categoria,
          overdue,
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

  addTask: (tarefa) => {
    const { tarefas } = get();
    const novasTarefas = [...tarefas, tarefa];
    set({
      tarefas: novasTarefas,
      concluidas: novasTarefas.filter((t) => t.done).length,
      total: novasTarefas.length,
    });
  },
}));

import { create } from "zustand";

interface Tarefa {
  id: string;
  done: boolean;
}

interface TasksStore {
  tarefas: Tarefa[];
  concluidas: number;
  total: number;
  setTarefas: (tarefas: Tarefa[]) => void;
  toggleConcluida: (id: string) => void;
}

export const useTasksStore = create<TasksStore>((set) => ({
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
      const concluidas = tarefas.filter((t) => t.done).length;
      return {
        tarefas,
        concluidas,
        total: tarefas.length,
      };
    }),
}));


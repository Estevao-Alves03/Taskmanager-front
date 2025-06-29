import { create } from "zustand";

export interface Tarefa {
  id: string;
  done: boolean;
  title: string;
  description?: string;
  due_date: string;
  priority: "baixa" | "media" | "alta";
  category: string;
  overdue?: boolean;
}

interface TasksStore {
  tarefas: Tarefa[];
  concluidas: number;
  total: number;
  filter: "todas" | "pendentes" | "concluidas" | "atrasadas";
  setFilter: (filter: "todas" | "pendentes" | "concluidas") => void;
  setTarefas: (tarefas: Tarefa[]) => void;
  toggleConcluida: (id: string) => void;
  loadTasks: () => Promise<void>;
  addTask: (tarefa: Omit<Tarefa, "id" | "done">) => void;
  deletetask: (id: string) => void;
  editTask: (id: string, updatedData: Omit<Tarefa, "id" | "overdue">) => Promise<void>; // ✅ aqui
}
export const useTasksStore = create<TasksStore>()((set, get) => ({
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

  toggleConcluida: async (id: string) => {
  const tarefa = get().tarefas.find((t) => t.id === id);
  if (!tarefa) return;

  const updatedDone = !tarefa.done;

  try {
    await fetch(`http://localhost:8000/api/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ done: updatedDone }),
    });

    const tarefas = get().tarefas.map((t) =>
      t.id === id ? { ...t, done: updatedDone } : t
    );
    set({
      tarefas,
      concluidas: tarefas.filter((t) => t.done).length,
      total: tarefas.length,
    });
  } catch (error) {
    console.error("Erro ao atualizar tarefa:", error);
  }
},



  loadTasks: async () => {
  try {
    const res = await fetch("http://localhost:8000/api/tasks");
    const json = await res.json();

    // Laravel retorna um objeto com "data" que contém o array das tarefas
    const data: Tarefa[] = json.data;

    if (!Array.isArray(data)) throw new Error("Tasks data inválida");

    const now = new Date();

    const mapped = data.map((t) => {
      const vencimentoDate = new Date(t.due_date);
      return {
        ...t,
        date: t.due_date,
        done: Boolean(t.done),
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

addTask: async (novaTarefa) => {
  console.log("Enviando tarefa:", novaTarefa);
  try {
    const response = await fetch("http://localhost:8000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novaTarefa),
    });

    console.log("Status resposta:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro no POST: ${response.status} - ${errorText}`);
    }

    const tarefaCriada = await response.json();

    await get().loadTasks();

    return tarefaCriada;
  } catch (error) {
    console.error("Erro ao adicionar tarefa:", error);
    throw error;
  }
},

deletetask: async (id: string) => {
  try {
      const response = await fetch(`http://localhost:8000/api/tasks/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    if(!response.ok){
      throw new Error ('Erro ao excluir a tarefa')
    }

    await get().loadTasks()

    console.log('Tarefa excluida com sucesso')
  } catch(error){
    console.log('Erro:', error)
  }
},

editTask: async (id: string, updatedData: Omit<Tarefa, "id" | "overdue">) => {
  try {
    const response = await fetch(`http://localhost:8000/api/tasks/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro ao editar tarefa: ${response.status} - ${errorText}`);
    }

    await get().loadTasks();

    console.log("Tarefa atualizada com sucesso");
  } catch (error) {
    console.error("Erro ao editar tarefa:", error);
  }
},

}));

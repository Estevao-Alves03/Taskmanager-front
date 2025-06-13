import { useEffect, useState } from "react";
import { useTasksStore } from "../Zustand/Store/TaksStore";

interface TaskItemProps {
  id: string;
  done: boolean;
  title: string;
  description?: string;
  date: string;
  priority: "baixa" | "média" | "alta";
  category: string;
  overdue?: boolean;
}

function TaskItem({
  id,
  done,
  title,
  description,
  date,
  priority,
  category,
  overdue,
}: TaskItemProps) {
  const toggleConcluida = useTasksStore((state) => state.toggleConcluida);

  return (
    <div
      className={`flex items-start gap-4 p-4 rounded-md border ${
        done ? "bg-gray-100 border-gray-300" : "bg-white border-gray-200"
      }`}
    >
      <input
        type="checkbox"
        checked={done}
        onChange={() => toggleConcluida(id)}
        className={`mt-1 w-5 h-5 rounded border ${
          done ? "bg-gray-300" : "bg-white"
        }`}
      />
      <div className="flex-1">
        <h3
          className={`font-semibold ${
            done ? "line-through text-gray-400" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        {description && (
          <p
            className={`text-sm mt-1 ${
              done ? "line-through text-gray-400" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        )}
        <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
          <time>{new Date(date).toLocaleDateString()}</time>
          {overdue && (
            <span className="ml-2 text-red-600 font-semibold">Atrasada</span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${
            priority === "baixa"
              ? "bg-green-100 text-green-800"
              : priority === "média"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {priority}
        </span>
        <span className="px-2 py-1 rounded bg-gray-100 text-gray-800 text-xs font-semibold">
          {category}
        </span>
      </div>
    </div>
  );
}

interface Task {
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
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  const setTarefas = useTasksStore((state) => state.setTarefas);
  const tarefas = useTasksStore((state) => state.tarefas);

  useEffect(() => {
    fetch("http://localhost:3000/tarefas")
      .then((res) => res.json())
      .then((data: RawTaskFromDB[]) => {
        const mappedTasks: Task[] = data.map((t) => {
          const prioridade =
            t.prioridade.toLowerCase() === "media"
              ? "média"
              : (t.prioridade as "baixa" | "média" | "alta");
          const vencimentoDate = new Date(t.vencimento);
          const now = new Date();
          const overdue = vencimentoDate < now;

          return {
            done: false,
            title: t.titulo,
            description: t.descricao,
            date: t.vencimento,
            priority: prioridade,
            category: t.categoria,
            overdue,
          };
        });

        setTasks(mappedTasks);
        setTarefas(
          mappedTasks.map((task) => ({
            id: crypto.randomUUID(),
            done: task.done,
          }))
        );

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [setTarefas]);

  if (loading) return <p>Carregando tarefas...</p>;
  if (!tasks.length)
    return (
      <p className="mx-72 mt-5 text-lg font-serif">Nenhuma tarefa encontrada.</p>
    );

  return (
    <div className="flex flex-col gap-4 mx-72 mt-5">
      {tarefas.map((tarefa, index) => (
        <TaskItem
          key={tarefa.id}
          id={tarefa.id}
          done={tarefa.done}
          title={tasks[index]?.title || ""}
          description={tasks[index]?.description}
          date={tasks[index]?.date || ""}
          priority={tasks[index]?.priority || "baixa"}
          category={tasks[index]?.category || ""}
          overdue={tasks[index]?.overdue}
        />
      ))}
    </div>
  );
}

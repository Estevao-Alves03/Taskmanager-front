import { useMemo } from "react";
import { useTasksStore } from "../../Zustand/Store/TaksStore";

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
function TaskFilter() {
  const tarefas = useTasksStore((state) => state.tarefas);
  const filter = useTasksStore((state) => state.filter);
  const toggleConcluida = useTasksStore((state) => state.toggleConcluida);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "concluidas":
        return tarefas.filter((t) => t.done);
      case "pendentes":
        return tarefas.filter((t) => !t.done);
      default:
        return tarefas;
    }
  }, [tarefas, filter]);

  const isFiltered = filter === "concluidas" || filter === "pendentes";

  return (
    <div>
      {isFiltered && filteredTasks.length > 0 && (
        <div className="flex flex-col gap-4 mx-72 mt-5">
          {filteredTasks.map(
            ({
              id,
              done,
              title,
              description,
              date,
              priority,
              category,
              overdue,
            }: TaskItemProps) => (
              <div
                key={id}
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
            )
          )}
        </div>
      )}
    </div>
  );
}
export default TaskFilter
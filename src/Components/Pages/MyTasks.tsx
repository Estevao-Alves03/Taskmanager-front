import { useEffect, useState } from "react";
import { useTasksStore } from "../../Zustand/Store/TaksStore";
import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { LiaTrashSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Alert from "../../Layout/Alert";
import Loading from "../../img/Loading.svg";

interface TaskItemProps {
  id: string;
  done: boolean;
  title: string;
  description?: string;
  due_date: string;
  priority: "baixa" | "media" | "alta";
  category: string;
  overdue?: boolean;
  onDelete: () => void;
}

const TaskItem = React.memo(function TaskItem({
  id,
  done,
  title,
  description,
  due_date,
  priority,
  category,
  overdue,
  onDelete,
}: TaskItemProps) {
  const toggleConcluida = useTasksStore((state) => state.toggleConcluida);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<null | {
    message: string;
    type: "success" | "error" | "warning" | "info";
  }>(null);

  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/EditTask/${id}`);
  }

  return (
    <>
      <div
        className={`flex items-start gap-6 p-4 rounded-md border ${
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
            <time>{new Date(due_date).toLocaleDateString()}</time>
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
                : priority === "media"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {priority}
          </span>
          <span className="px-2 py-1 rounded bg-gray-100 text-gray-800 text-xs font-semibold">
            {category}
          </span>
          <div className="flex justify-around text-lg">
            <span className="hover:text-emerald-600">
              <button onClick={handleEdit}>
                <MdOutlineEdit />
              </button>
            </span>
            <span className="hover:text-red-700">
              <button onClick={onDelete}>
                <LiaTrashSolid />
              </button>
            </span>
          </div>
        </div>
      </div>
      {alert && <Alert message={alert.message} type={alert.type} />}
    </>
  );
});

export default function TaskList() {
  const tarefas = useTasksStore((state) => state.tarefas);
  const loadTasks = useTasksStore((state) => state.loadTasks);
  const deletetask = useTasksStore((state) => state.deletetask);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<null | {
    message: string;
    type: "success" | "error" | "warning" | "info";
  }>(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Tem certeza que deseja excluir a tarefa ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, excluir tarefa",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      setAlert({ message: "Excluindo a tarefa...", type: "success" });
      setIsLoading(true);
      setTimeout(() => {
        deletetask(id);
        setAlert(null);
        setIsLoading(false);
      }, 2550);
    }
  };

  if (!tarefas.length)
    return (
      <p className="w-full mt-6 ml-2 text-2xl font-serif">
        Nenhuma tarefa encontrada.
      </p>
    );

  return (
    <>
      {alert && <Alert message={alert.message} type={alert.type} />}
      {tarefas.length === 0 ? (
        <p className="w-full mt-6 ml-2 text-2xl font-serif">
          Nenhuma tarefa encontrada.
        </p>
      ) : (
        <div className="flex flex-col gap-4 w-full mt-5">
          {tarefas.map((task) => (
            <TaskItem
              key={task.id}
              {...task}
              onDelete={() => handleDelete(task.id)}
            />
          ))}
        </div>
      )}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <img src={Loading} alt="Carregando..." className="w-36 h-44" />
        </div>
      )}
    </>
  );
}

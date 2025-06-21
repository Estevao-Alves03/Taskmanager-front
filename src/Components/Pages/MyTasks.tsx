import { useEffect } from "react";
import { useTasksStore } from "../../Zustand/Store/TaksStore";
import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { LiaTrashSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

interface TaskItemProps {
  id: string;
  done: boolean;
  title: string;
  description?: string;
  due_date: string;
  priority: "baixa" | "media" | "alta";
  category: string;
  overdue?: boolean;
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
}: TaskItemProps) {
  const toggleConcluida = useTasksStore((state) => state.toggleConcluida);
  const deletetask = useTasksStore((state) => state.deletetask)

const navigate = useNavigate()

function EditTask() {
  navigate('/EditTask')
}
  

  return (
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
              <button onClick={EditTask}>
                <MdOutlineEdit/>
              </button>
          </span>
          <span className="hover:text-red-700">
            <button onClick={() => deletetask(id)}>
              <LiaTrashSolid/>
            </button>
            </span>
        </div>
      </div>
    </div>
  );
});


export default function TaskList() {
  const tarefas = useTasksStore((state) => state.tarefas);
  const loadTasks = useTasksStore((state) => state.loadTasks);


 useEffect(() => {
  loadTasks(); // Apenas ao montar o componente
}, []);


  if (!tarefas.length)
    return (
      <p className="mx-72 mt-5 text-lg font-serif">
        Nenhuma tarefa encontrada.
      </p>
    );

  return (
    <div className="flex flex-col gap-4 mx-72 mt-5">
      {tarefas.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </div>
  );
}

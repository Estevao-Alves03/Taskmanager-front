import React, { useState, useMemo } from "react";
import { Input } from "../components/ui/input";
import { RxMagnifyingGlass } from "react-icons/rx";
import { LiaFilterSolid } from "react-icons/lia";
import { useTasksStore } from "@/Zustand/Store/TaksStore";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const tarefas = useTasksStore((state) => state.tarefas);
  const filter = useTasksStore((state) => state.filter);
  const setFilter = useTasksStore((state) => state.setFilter);

  const preFiltered = useMemo(() => {
    switch (filter) {
      case "concluidas":
        return tarefas.filter((t) => t.done);
      case "pendentes":
        return tarefas.filter((t) => !t.done);
      case "atrasadas":
        return tarefas.filter((t) => !t.overdue);
      default:
        return tarefas;
    }
  }, [tarefas, filter]);

  const filteredTask = useMemo(() => {
    if (!searchTerm) return [];
    return preFiltered.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [preFiltered, searchTerm]);

  return (
    <div className="mx-72 border-2 border-zinc-300 p-4 rounded-md">
      {/* Barra de busca e filtro */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <RxMagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar Tarefas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border-2 border-zinc-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
        <div className="w-60">
          <div className="flex items-center border border-zinc-300 rounded px-3 py-2 gap-2">
            <LiaFilterSolid className="text-lg text-gray-500" />
            <select
              value={filter}
              onChange={(e) =>
                setFilter(
                  e.target.value as "todas" | "concluidas" | "pendentes"
                )
              }
              className="w-full bg-transparent outline-none cursor-pointer"
            >
              <option value="todas">Todas as tarefas</option>
              <option value="concluidas">Concluídas</option>
              <option value="pendentes">Pendentes</option>
              <option value="atrasadas">Atrasadas</option>
            </select>
          </div>
        </div>
      </div>

      {searchTerm && (
        <div className="mt-4 space-y-2">
          {filteredTask.length > 0 ? (
            filteredTask.map((task) => (
              <div
                key={task.id}
                className="p-2 border rounded bg-zinc-100 flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{task.title}</p>
                  {task.description && (
                    <p className="text-sm text-gray-500">{task.description}</p>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  {/* Prioridade colorida */}
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      task.priority === "baixa"
                        ? "bg-green-100 text-green-800"
                        : task.priority === "media"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {task.priority}
                  </span>

                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={task.done}
                    readOnly
                    className="mt-1 w-5 h-5"
                  />
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">Nenhuma tarefa encontrada.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;

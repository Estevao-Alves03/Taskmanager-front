import { Input } from "../components/ui/input";
import { RxMagnifyingGlass } from "react-icons/rx";
import { LiaFilterSolid } from "react-icons/lia";
import { useTasksStore } from "@/Zustand/Store/TaksStore";

function Search() {
  const filter = useTasksStore((state) => state.filter);
  const setFilter = useTasksStore((state) => state.setFilter)

  return (
    <div className="mx-72 border-2 border-zinc-300 p-4 rounded-md">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <RxMagnifyingGlass />
          </span>
          <Input
            type="text"
            placeholder="Buscar Tarefas..."
            className="pl-10 pr-4 py-2 border-2 border-zinc-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="w-60">
          <div className="flex items-center border border-zinc-300 rounded px-3 py-2 gap-2">
            <LiaFilterSolid className="text-lg text-gray-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as 'todas' | 'concluidas' | 'pendentes')}
              className="w-full bg-transparent outline-none cursor-pointer"
            >
              <option value='todas'>Todas as tarefas</option>
              <option value='concluidas'>Concluidas</option>
              <option value='pendentes'>Pendentes</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;

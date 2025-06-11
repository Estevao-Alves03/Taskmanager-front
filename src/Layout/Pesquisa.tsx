import { Input } from "../components/ui/input";
import { RxMagnifyingGlass } from "react-icons/rx";
import { LiaFilterSolid } from "react-icons/lia";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

function Pesquisa() {
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
            <Select>
                <SelectTrigger className="w-full border-zinc-300 flex items-center gab-2">
                    <LiaFilterSolid className="text-lg text-gray-500" />
                    <SelectValue placeholder='Todas as tarefas'/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="todas">Todas as tarefas</SelectItem>
                    <SelectItem value="concluidas">Concluidas</SelectItem>
                    <SelectItem value="pendentes">Pendentes</SelectItem>
                </SelectContent>
            </Select>
        </div>
      </div>
    </div>
  );
}

export default Pesquisa;

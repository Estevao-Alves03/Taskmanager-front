import { useTasksStore } from "../Zustand/Store/TaksStore";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { MdAdd } from "react-icons/md";
import { Menu } from "lucide-react";
import { useSideBarStore } from "@/Zustand/Store/SideStore";

function BarraDeTarefas() {
  const { total, concluidas } = useTasksStore();
  const toggleSideBar = useSideBarStore((state) => state.toggle);
  const progresso = (concluidas / total) * 100;
  const navigate = useNavigate();

  const Newtask = () => {
    navigate("/NewTask");
  };

  return (
    <div className="mx-full bg-white pt-7 p-4 rounded">
      <div className="flex justify-between items-center mb-2">
        {/* ESQUERDA: Botão + Título */}
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold">Minhas tarefas</h2>
            <p className="text-lg text-gray-600">
              {concluidas} de {total} tarefas concluidas!
            </p>
          </div>
        </div>
        <Button
          onClick={Newtask}
          className="bg-emerald-600 text-white px-6 py-6 rounded hover:bg-emerald-700 text-xl flex items-center gap-2"
        >
          <MdAdd /> Nova Tarefa
        </Button>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-2 bg-emerald-600 rounded-full transition-all"
          style={{ width: `${progresso}%` }}
        />
      </div>
    </div>
  );
}

export default BarraDeTarefas;

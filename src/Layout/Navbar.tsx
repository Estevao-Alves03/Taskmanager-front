import { SidebarTrigger } from "../components/ui/sidebar";
import { useSideBarStore } from "../Zustand/Store/SideStore";

function Navbar() {
  const toggleSidebar = useSideBarStore((state) => state.toggle);

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-300 px-4">
      <SidebarTrigger className="-ml-1" onClick={toggleSidebar} />
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-semibold text-gray-700">Gerenciador de Tarefas</h1>
      </div>
    </header>
  );
}

export default Navbar;

import { Home, Calendar, Plus, User, Settings, ListChecks } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  SidebarHeader,
} from "../components/ui/sidebar";
import { NavLink } from "react-router-dom";
import { useSideBarStore } from "../Zustand/Store/SideStore";
import { useState, useEffect } from "react";

function SidebarMenu() {
  const menu = [
    { name: "Dashboard", icon: Home, to: "/" },
    { name: "Calendário", icon: Calendar, to: "/" },
    { name: "Nova Tarefa", icon: Plus, to: "/Newtask" },
    { name: "Perfil", icon: User, to: "/" },
    { name: "Configurações", icon: Settings, to: "/" },
  ];

  const isOpen = useSideBarStore((state) => state.isOpen);
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 300);
      return clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <Sidebar
      className={`
    fixed top-0 left-0 h-screen w-64 bg-white border-r z-50
    transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
    >
      <SidebarHeader className="text-lg font-bold">
        Menu Principal
      </SidebarHeader>
      <SidebarContent className="flex-1 px-2">
        <SidebarGroup>
          {menu.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium hover:bg-muted transition ${
                  isActive ? "bg-muted font-semibold" : ""
                }`
              }
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </NavLink>
          ))}
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 text-xs text-muted-foreground text-gray-900">
        © 2025 TaskFlow
      </SidebarFooter>
    </Sidebar>
  );
}

export default SidebarMenu;

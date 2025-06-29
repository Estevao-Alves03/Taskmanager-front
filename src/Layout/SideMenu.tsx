import { Home, Calendar, Plus, User, Settings, ListChecks, User2, SettingsIcon, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "../components/ui/sidebar";
import { Link, NavLink } from "react-router-dom";
import { useSideBarStore } from "../Zustand/Store/SideStore";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { IoChevronUp } from "react-icons/io5";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

function SideMenu() {
  const menu = [
    { name: "Dashboard", icon: Home, to: " " },
    { name: "Calendário", icon: Calendar, to: " " },
    { name: "Nova Tarefa", icon: Plus, to: "/Newtask" },
    // { name: "Perfil", icon: User, to: "/Profile" },
    // { name: "Configurações", icon: Settings, to: "/SettingsPage" },
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
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="border-2 border-gray-300  hover:bg-gray-200 px-6 py-6">
                <SidebarMenuButton className="">
                  <div className="bg-gray-500 text-white rounded-full border-2 w-8 h-8 flex items-center justify-center">
                    <span>EA</span>
                  </div>
                  Estevao Alves
                  <IoChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width] border-2 border-gray-300 p-1 bg-gray-100"
              >
                <DropdownMenuItem className="px-2 py-2 flex items-center hover:bg-gray-200" asChild>
                  <div>
                  <User2 className="w-4 h-4 mr-1"/>
                  <Link to="/Profile">Profile</Link>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-2 flex items-center hover:bg-gray-200" asChild>
                  <div>
                  <SettingsIcon className="w-4 h-4 mr-1"/>
                  <Link to="/SettingsPage">Settings</Link>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="px-2 py-2 flex items-center hover:bg-gray-200" asChild>
                  <div>
                    <LogOut className="w-4 h-4 mr-1"/>
                    <Link to="/">Log out</Link>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

export default SideMenu;

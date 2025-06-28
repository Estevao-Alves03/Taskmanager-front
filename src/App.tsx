import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// paginas
import TaskBar from "./Layout/TaskBar";
import Search from "./Layout/Search";
import Progress from "./Layout/Progress";
import MyTasks from "./Components/Pages/MyTasks";
import NewTask from "./Components/Pages/NewTask";
import TaskFilter from "./Components/Pages/TaskFilter";
import EditTask from "./Components/Pages/EditTask";
import Welcome from "./Components/Pages/Welcome";
import Register from "./Components/Pages/Register";
import SettingsPage from "./Components/Pages/SettingsPage";
import Profile  from "./Components/Pages/Profile";
import Login from "./Components/Pages/Login";
import SidebarMenu from "./Layout/SidebarMenu";
import Navbar from "./Layout/Navbar"
// store do zustand para condiçao
import { useTasksStore } from "./Zustand/Store/TaksStore";
import { useSideBarStore } from "./Zustand/Store/SideStore";
import { SidebarProvider } from "./components/ui/sidebar";

function MainLayout() {
  const total = useTasksStore((state) => state.total);
  const filter = useTasksStore((state) => state.filter);
  const isOpen = useSideBarStore((state) => state.isOpen);

  return (
    <SidebarProvider>
      <div
        className={`h-screen w-full transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-0"
        }`}
      >
        <SidebarMenu />
        <main className="p-4 min-h-screen mb-12">
          <Navbar/>
          <TaskBar />
          <Search />
          {filter === "todas" || !filter ? <MyTasks /> : <TaskFilter />}
          {total > 0 ? <Progress /> : null}
        </main>
      </div>
    </SidebarProvider>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/Welcome" element={<Welcome />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/NewTask" element={<NewTask />} />
        <Route path="/EditTask/:id" element={<EditTask />} />
        <Route path="/SettingsPage" element={<SettingsPage/>} />
        <Route path="/Profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;

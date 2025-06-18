import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// paginas  
import TaskBar from "./Layout/TaskBar";
import Search from "./Layout/Search";
import Progress from "./Layout/Progress";
import MyTasks from './Components/Pages/MyTasks'
import NewTask from "./Components/Pages/NewTask"
import TaskFilter from "./Components/Pages/TaskFilter"
// store do zustand para condiçao
import { useTasksStore } from "./Zustand/Store/TaksStore";

function MainLayout() {

const total = useTasksStore((state) => state.total);
const filter = useTasksStore((state) => state.filter)

  return(
    <>
      <TaskBar/>
      <Search/>
      {filter === "todas" || !filter ? (
        <MyTasks/> 
      ) : (
        <TaskFilter />
      )}
      {total > 0 ? <Progress/> : null}
    </>
  )
}


function App() {
  
  return (
      <Router>
        <Routes>
            <Route path="/" element={<MainLayout/>} />
            <Route path="/NewTask" element={<NewTask/>} />
        </Routes>
      </Router>
  )
}

export default App

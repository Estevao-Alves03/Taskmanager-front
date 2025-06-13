import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// paginas  
import TaskBar from "./Layout/TaskBar";
import Search from "./Layout/Search";
import Progress from "./Layout/Progress";
import MyTasks from './Layout/MyTasks'
import NewTask from "./Components/Pages/NewTask"
// store do zustand para condiçao
import { useTasksStore } from "./Zustand/Store/TaksStore";

function MainLayout() {

const total = useTasksStore((state) => state.total);

  return(
    <>
      <TaskBar/>
      <Search/>
      <MyTasks/>
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

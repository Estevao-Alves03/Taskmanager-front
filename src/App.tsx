import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// paginas  
import BarraDeTarefas from "./Layout/BarraDeTarefas";
import Pesquisa from "./Layout/Pesquisa";
import Progresso from "./Layout/Progresso";
import NovaTarefa from "./Components/Pages/NovaTarefa"
// store do zustand para condiçao
import { useTarefasStore } from "./Zustand/Store/TarefasStore";

function LayoutPrincipal() {

  const {total} = useTarefasStore()


  return(
    <>
      <BarraDeTarefas/>
      <Pesquisa/>
      {total > 0 ? <Progresso/> : null}
    </>
  )
}


function App() {
  
  return (
      <Router>
        <Routes>
            <Route path="/" element={<LayoutPrincipal/>} />
            <Route path="/NovaTarefa" element={<NovaTarefa/>} />
        </Routes>
      </Router>
  )
}

export default App

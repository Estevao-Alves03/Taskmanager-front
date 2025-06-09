import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// paginas  
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Cadastro from "./Components/Pages/Cadastro";

// layouts
import Navbar from "./Layout/Navbar";

function App() {
  
  return (
      <Router>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/Login" element={<Login />}/>
              <Route path="/Cadastro" element={<Cadastro />}/>
          </Routes>
      </Router>
  )
}

export default App

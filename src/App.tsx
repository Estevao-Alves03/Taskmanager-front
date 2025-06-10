import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// paginas  
import  Home from './Components/Pages/Home';


function App() {
  
  return (
      <Router>
         <Home/>
      </Router>
  )
}

export default App

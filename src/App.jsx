import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Signup from "./pages/Signup"
import Login from "./pages/Login"

function App() {

  return(
    <div>
      <BrowserRouter>
      <Navbar/>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />

         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
import './App.css'
import FakeStore from './components/FakeStore'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Productos from './components/Productos'
import Carrito from './components/Carrito'

function App() {
  

  return (
    <>

    <Router>

      <NavBar/> 

      <Routes>

        <Route path="/" element={<FakeStore />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />


      </Routes>
      
      </Router>

      
    </>
  )
}

export default App

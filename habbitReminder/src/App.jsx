import React from 'react'
import './App.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Modal from './components/Modal/Modal.jsx'
import Habbitlist from './components/Habbitlist/Habbitlist'
function App() {
  
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Modal" element={<Modal/>} />
          <Route path="/Habbitlist" element={<Habbitlist/>} />
        </Routes>
      </Router>
  )
}

export default App

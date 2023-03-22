import React from 'react'
import './App.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Modal from './components/Modal.jsx'
function App() {
  

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Modal" element={<Modal/>} />
        </Routes>
      </Router>
  )
}

export default App

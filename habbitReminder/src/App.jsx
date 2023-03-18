import React from 'react'
import './App.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Dashboard from './components/Dashboard'
function App() {
  

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
  )
}

export default App

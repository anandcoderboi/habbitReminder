import React from "react";
import logo1 from "../assets/logo1.jpeg";
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo" src={logo1} alt="Logo" />
      </div>
      <ul className="list">
        <li className="home"><Link to="/" className="link">Home</Link></li>
        <li ><Link to="/about" className="link">About</Link></li>
        <li>blog</li>
        <li>
          <button className="button"><Link to="/dashboard" className="link">Go to app</Link></button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

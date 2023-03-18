import React from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <ul className="list">
        <li className="home">Home</li>
        <li>About</li>
        <li>blog</li>
        <li>
          <button className="button">Go to the App</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

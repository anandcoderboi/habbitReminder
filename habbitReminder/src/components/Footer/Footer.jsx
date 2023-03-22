import React from 'react'
import logo1 from "../../assets/logo1.jpeg";
import "./Footer.css"
const Footer = () => {
 return (
    <div className="footer">
        <hr className='line' />
      <div className="logo">
        <img className="logo footerLogo" src={logo1} alt="Logo" />
      </div>
      <ul className="list">
        <li>Privacy</li>
        <li>Terms of Service</li>
      </ul>
    </div>
  );
}

export default Footer
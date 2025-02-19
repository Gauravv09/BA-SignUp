import React from "react";
import baLogo from "../assets/logo.png"; // Replace with the actual BA logo path
import "../styles/header.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="header">
      <img src={baLogo} alt="Blue Altair Logo" />
     <div className="head"><h1>Employee Signup</h1></div> 
    </header>
  );
};

export default Header;

import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <a href="/">Home</a>

      <a href="/about">About</a>

      <a href="/contact">Contact</a>
    </nav>
  );
};

export default Navbar;

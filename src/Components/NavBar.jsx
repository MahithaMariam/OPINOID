import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Function to scroll to the About Us section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-container");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to the Comment Analysis section
  const scrollToAnalyser = () => {
    const analyserSection = document.getElementById("analyser-container");
    analyserSection.scrollIntoView({ behavior: "smooth" });
};

  return (
    <nav className="navbar">
      <Link to="/" className="title" onClick={closeMenu}>
        OPINOID
      </Link>
      <div className="menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <button onClick={scrollToAbout}>About Us</button>
        </li>
        <li>
          <button onClick={scrollToAnalyser}>Comment Analysis</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

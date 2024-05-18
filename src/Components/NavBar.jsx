import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import QueryIdentification from "./Queries";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about-container");
    aboutSection.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  const scrollToAnalyser = () => {
    const analyserSection = document.getElementById("analyser-container");
    analyserSection.scrollIntoView({ behavior: "smooth" });
    closeMenu();
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
            <button type="button">Home</button>
          </Link>
        </li>
        <li>
          <button type="button" onClick={scrollToAbout}>About Us</button>
        </li>
        <li>
          <button type="button" onClick={scrollToAnalyser}>Comment Analysis</button>
        </li>
        <li>
          <Link to="/login" onClick={closeMenu}>
            <button type="button">Login</button>
          </Link>
        </li>
        <li>
          <Link to="/queries" onClick={<QueryIdentification/>}>
            <button type="button">Queries</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

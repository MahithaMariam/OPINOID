import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";
import QueryIdentification from "./Queries";
import { LogIn } from "lucide-react";
import Analyser from "./Analyser";
import AboutUs from "./AboutUs";

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
        <Link to="/about" path={<AboutUs/>}>
          <button type="button">About Us</button>
          </Link>
        </li>
        <li>
        <Link to="/analyser" path={<Analyser/>}>
          <button type="button">Comment Analysis</button>
          </Link>
        </li>
        <li>
          <Link to="/login" path={<LogIn/>}>
            <button type="button">Login</button>
          </Link>
        </li>
        <li>
          <Link to="/queries" path={<QueryIdentification/>}>
            <button type="button">Queries</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

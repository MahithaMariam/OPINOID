import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
          <NavLink to="/" activeClassName="active" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active" onClick={closeMenu}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/analyser"
            activeClassName="active"
            onClick={closeMenu}
          >
            Comment Analysis
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


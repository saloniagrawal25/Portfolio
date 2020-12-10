import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

function Navbar() {
  return (
    <nav>
      <div>
        <NavLink to="/" className="link">About Me</NavLink>
        <NavLink to="/experience" className="link">Experience</NavLink>
        <NavLink to="/skills" className="link">Skills</NavLink>
        <NavLink to="/contact" className="link">Contact Me</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;

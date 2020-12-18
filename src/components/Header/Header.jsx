import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./header.scss";

function Header() {
  return (
      <Navbar collapseOnSelect expand="lg" >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto nav-elements">
        <NavLink to="/" className="link">About Me</NavLink>
         <NavLink to="/experience" className="link">Experience</NavLink>
         <NavLink to="/skills" className="link">Skills</NavLink>
         <NavLink to="/contact" className="link">Contact Me</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

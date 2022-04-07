import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="secondary" expand="lg">
      <Navbar.Brand variant="secondary">
        <img
          src={require("../../img/hackLogo.png")}
          width="30"
          height="30"
          className="d-inline-block align-top ms-4"
          alt="hackaton site logo"
        />
        <Link className="no-underline" to="/">
          <span className="text-white fw-bold ms-4">HACKATHON</span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Link className="nav-link" to="/hackathon-list">
          <span className="text-dark-white">Hackathons list</span>
        </Link>
        <Link className="nav-link" to="/world-ranking">
          <span className="text-dark-white">World Ranking</span>
        </Link>
        <Link className="nav-link ms-auto me-3" to="/world-ranking">
          <span className="text-dark-white">Login</span>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

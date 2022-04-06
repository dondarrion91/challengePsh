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
          <span className="text-white fw-bold ms-4">WORLD HACKATHON SITE</span>
        </Link>
      </Navbar.Brand>
      <Nav>
        <Link className="nav-link" to="/hackathon-list">
          Hackathons list
        </Link>
        <Link className="nav-link" to="/world-best-developers">
          World best developers
        </Link>
      </Nav>
      <Navbar className="ms-auto me-3" id="basic-navbar-nav">
        <Nav>
          <Button variant="primary">Login</Button>
        </Nav>
      </Navbar>
    </Navbar>
  );
}

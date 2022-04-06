import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

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
        <span className="text-white fw-bold ms-4">WORLD HACKATHON SITE</span>
      </Navbar.Brand>
      <Navbar className="ms-auto me-3" id="basic-navbar-nav">
        <Nav>
          <Button variant="primary">Login</Button>
        </Nav>
      </Navbar>
    </Navbar>
  );
}

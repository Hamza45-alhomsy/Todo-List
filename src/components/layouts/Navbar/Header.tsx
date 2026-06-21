"use client";

import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#0077b6", color: "white" }}>
      <Container>
        <Navbar.Brand href="/home" style={{ color: "white" }}>
          Todo List
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/home" style={{ color: "white" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/signup" style={{ color: "white" }}>
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

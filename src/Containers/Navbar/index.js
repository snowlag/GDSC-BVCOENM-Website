import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
      style={{ maxWidth: "100vw" }}
    >
      <div class="container-fluid">
        <Navbar.Brand href="/">
          <Container>
            <img
              src="/logo.svg"
              width="40"
              height="35"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/teams">Teams</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

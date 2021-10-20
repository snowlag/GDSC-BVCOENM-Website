import React from "react";
import { NavLink } from "react-router-dom";
import {Navbar , Container , Nav , NavDropdown} from "react-bootstrap" 

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
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
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
      <Container>
      <Nav.Link href="/contact">Contact us</Nav.Link>
      </Container>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}



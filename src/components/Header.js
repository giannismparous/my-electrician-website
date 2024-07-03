// src/components/Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/" className="brand">
        Γίωργος Βλάχος - Ηλεκτρολόγος Βύρωνας
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} to="/">Αρχική</Nav.Link>
          <Nav.Link as={Link} to="/contact">Επικοινωνία</Nav.Link>
        </Nav>
        <a href="tel:+306981324416" className="phone-number">Τηλ: +306981324416</a>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;

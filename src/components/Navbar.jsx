import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsList } from 'react-icons/bs';
import '../styles/components/logo.css';
import '../styles/components/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (expanded && navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [expanded]);

  return (
    <Navbar
      ref={navbarRef}
      expand="lg"
      data-bs-theme="light"
      expanded={expanded}
      onToggle={setExpanded}
      className="custom-navbar"
    >
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand as={Link} to="/" className="ms-0">
          <img
            src="/assets/images/logo.png"
            alt="Pure Health Nexus Logo"
            className="logo"
          />
        </Navbar.Brand>

        <div className="toggler-collapse-container">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-0"
            type="button"
          >
            <BsList size={30} />
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav" className="overlay-collapse">
            <Nav className="overlay-nav">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

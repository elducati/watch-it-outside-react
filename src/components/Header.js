import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import logo from '../images/logo.png';

const Header = () => {
  const scrollToSection = (className) => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Navbar bg="transparent" expand="lg" fixed="top" className="custom-navbar">
        <Container>
          <Navbar.Brand className="brand-container">
            <motion.img 
              src={logo} 
              alt="logo" 
              whileHover={{ scale: 1.05 }}
              className="brand-logo"
            />
            <motion.span 
              className="brand-text"
              whileHover={{ color: '#007bff' }}
            >
              Watch It Outside Events Co.
            </motion.span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-links">
              <Nav.Link onClick={() => scrollToSection('about-section')}>About</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('movies-section')}>Movies</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('schedule-section')}>Schedule</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('register-form')}>Register</Nav.Link>
              <Nav.Link onClick={() => scrollToSection('contact-section')}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.header>
  );
};

export default Header;
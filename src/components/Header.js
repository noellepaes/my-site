import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaFacebookF, FaInstagram } from 'react-icons/fa'; // Ícones do Facebook e Instagram

const Header = () => (
  <Navbar expand="lg" className="navbar">
    <Container>
      <Navbar.Brand href="#">
        <img
          src="https://raw.githubusercontent.com/brediweb/estagio-frontend/5c91b537a667d04026e72499219e877ab4bab5d2/ARQUIVOS/logo.svg"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#inicio" className="nav-link">
            Início
          </Nav.Link>
          <Nav.Link href="#noticias" className="nav-link">
            Notícias
          </Nav.Link>
          <Nav.Link href="#footer" className="nav-link">
            Rodapé
          </Nav.Link>
          <Nav.Link href="https://facebook.com" target="_blank" className="nav-link">
            <FaFacebookF className="icon" />
          </Nav.Link>
          <Nav.Link href="https://instagram.com" target="_blank" className="nav-link">
            <FaInstagram className="icon" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Header;
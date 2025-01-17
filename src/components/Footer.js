import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer" id="footer">
    <Container>
      <Row className="align-items-center">
       
        <Col xs={12} md={6} className="text-center text-md-start mb-3 mb-md-0">
          <img src={"https://raw.githubusercontent.com/brediweb/estagio-frontend/5c91b537a667d04026e72499219e877ab4bab5d2/ARQUIVOS/logo.svg"}
           alt="Logo" className="footer-logo" />
        </Col>

        <Col xs={12} md={6} className="text-center text-md-end">
          <div className="footer-links">
            <span className="footer-link">Início</span>
            <span className="footer-link">Notícias</span>
            <span className="footer-link">Rodapé</span>
            <FaFacebookF className="footer-icon" />
            <FaInstagram className="footer-icon" />
          </div>
          <p className="footer-text">
            Rua Domingos Marreiros 49, sala 1308 Umarizal - Belém-PA - Brasil <br />
            contato@bredi.com.br
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

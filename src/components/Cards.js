import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Cards = () => {
  const cardData = [
    {
      img: 'https://raw.githubusercontent.com/brediweb/estagio-frontend/master/ARQUIVOS/app.png',
      title: 'Aplicativos',
      description: 'E-commerce, Games, Institucionais e Quiz.',
    },
    {
      img: 'https://raw.githubusercontent.com/brediweb/estagio-frontend/master/ARQUIVOS/site.png',
      title: 'Websites',
      description: 'Institucionais, E-commerces, Blogs e Sites.',
    },
    {
      img: 'https://raw.githubusercontent.com/brediweb/estagio-frontend/master/ARQUIVOS/sistema.png',
      title: 'Sistemas Online',
      description: 'Sistemas online e Intranets.',
    },
    {
      img: 'https://raw.githubusercontent.com/brediweb/estagio-frontend/master/ARQUIVOS/back.png',
      title: 'Back e Front-end',
      description: 'Vagas para estagiários nas áreas de Back-end e Front-end.',
    },
  ];

  return (
    <Container className="my-4 text-center">
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={3} className="mb-4">
            <Card className="border-0">
              <Card.Img variant="top" src={card.img} alt={card.title} />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Button className="custom-button">Veja mais</Button>
    </Container>
  );
};

export default Cards;

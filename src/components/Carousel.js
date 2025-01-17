import React from 'react';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => (
  <div className="carousel-container">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://github.com/brediweb/estagio-frontend/blob/master/ARQUIVOS/Grupo%20610.png?raw=true"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://github.com/brediweb/estagio-frontend/blob/master/ARQUIVOS/banner2.png?raw=true"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
);

export default MyCarousel;

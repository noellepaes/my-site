import './App.css';
import React from 'react';
import Header from './components/Header';
import MyCarousel from './components/Carousel';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <div>
      <Header />
      <MyCarousel />
      <Cards />
      <Footer />
    </div>
    </div>
  );
}

export default App;

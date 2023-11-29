"use client"
import React from 'react';
//import Mapa from './map';
import Header from '../header/header';
import Footer from '../footer/footer';
import Map from './map';


const Home: React.FC = () => {
  return (
    <div>
      <Header option={1}/>
      <h1>Localização em tempo real de ambulâncias</h1>
      <Map/>
      <Footer/>
    </div>
  );
};

export default Home;
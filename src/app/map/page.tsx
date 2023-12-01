"use client"
import React from 'react';
//import Mapa from './map';
import Header from '../component.header/header';
import Footer from '../component.footer/footer';
import Map from './map';


const Home: React.FC = () => {
  return (
    <div>
      <Header option={1}/>
      <Map/>
      <Footer/>
    </div>
  );
};

export default Home;
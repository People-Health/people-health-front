"use client"
import React from 'react';
//import Mapa from './map';
import Header from '../component.header/header';
import Footer from '../component.footer/footer';
import Mapa from './map';
import LogoFaixa from '../component.logoFaixa/logoFaixa';
import Localizacao from '../api/page';

const Home: React.FC = () => {
  return (
    <div>
      <LogoFaixa/>
      <Header option={1}/>
      {/* <Mapa/> */}
      <Localizacao/>
      <Footer/>
    </div>
  );
};

export default Home;
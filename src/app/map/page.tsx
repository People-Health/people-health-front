import React from 'react';
import Map from './map';
import Header from '../header/header';
import Footer from '../footer/footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header option={1}/>
      <h1>Localização em tempo real de ambulâncias</h1>
      <Map />
      <Footer/>
    </div>
  );
};

export default Home;
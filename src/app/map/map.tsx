
'use client'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useEffect, useState,useRef } from 'react';
//import axios,{AxiosResponse} from 'axios'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Suponha que esta é a sua lista de coordenadas.
const lista: { lat: number; lng: number }[] = [
  { lat: -23.5505, lng: -46.6333 },
  { lat: -22.9068, lng: -43.1729 },
  // Adicione mais coordenadas conforme necessário.
];





// Crie uma interface para representar o formato do token de autenticação
interface AuthToken {
  token: string;
}

// Função para realizar a autenticação e obter um token
async function authenticate(): Promise<AuthToken> {   //estava AuthToken
  // Implemente sua lógica de autenticação aqui
  // Exemplo: fazer uma chamada para um endpoint de login
  const response = await axios.post('https://localhost:8081/coords');

  // Retorne o token de autenticação
  return response.data;

}

// Função para realizar uma solicitação autenticada
async function fetchDataWithAuth(url: string): Promise<AxiosResponse> {

  const response = await axios.get(url, {
    proxy: {
      host: '0.0.0.0',
      port: 8081, 
      protocol: 'http', 
   
    },
  });
  console.log(response);

  return response;
}

const Map = () => {
  const apiUrl = 'http://localhost:8081/coords';
  const [position, setPosition] = useState<{ lat: number; lng: number }>();
  const [pos,setPos]=useState<{ number: {lat: number; lng: number} }>();
 
   
  
  useEffect(() => {

    fetchDataWithAuth(apiUrl)
    .then((response) => {
        console.log('Dados recebidos:', response.data);
        setPos(response.data['1']);
        setPosition(response.data['1']);
    })
    .catch((error) => {
      console.error('Erro ao fazer a solicitação:', error.message);
    });
    // const intervalId = setInterval(() => {
     
    
    //   // setPosition((prevPosition) => ({
    //   //   lat: prevPosition.lat + 0.001,
    //   //   lng: prevPosition.lng + 0.001,
    //   // }));
    // }, 5000);
   
    
    // return () => {
    //   clearInterval(intervalId);
    // };
      
    
  }, [] ); // Remova 'position' das dependências do hook useEffect.

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY">
      
        <GoogleMap mapContainerStyle={{ height: '100vh', width: '100%' }} center={position} zoom={10}>
          <Marker position={position!} />
        </GoogleMap>
  
      </LoadScript>
      <h1>texto:{JSON.stringify(pos)}</h1>
     
    </div>
  );
};

export default Map;
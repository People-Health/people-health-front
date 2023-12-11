'use client'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const lista: { lat: number; lng: number }[] = [
  { lat: -23.5505, lng: -46.6333 },
  { lat: -22.9068, lng: -43.1729 },
];

interface AuthToken {
  token: string;
}

async function authenticate(): Promise<AuthToken> {
  const response = await axios.post('https://localhost:8081/coords');
  return response.data;
}

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

const apiUrl = 'http://localhost:8081/coords';
fetchDataWithAuth(apiUrl)
    .then((response) => {
      console.log('Dados recebidos:', response.data);
    })
    .catch((error) => {
      console.error('Erro ao fazer a solicitação:', error.message);
    });


const Map = () => {
  const [position, setPosition] = useState<{ lat: number; lng: number }>({ lat: -23.5505, lng: -46.6333 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition((prevPosition) => ({
        lat: prevPosition.lat + 0.001,
        lng: prevPosition.lng + 0.001,
      }));
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY">
        <GoogleMap mapContainerStyle={{ height: '100vh', width: '100%' }} center={position} zoom={10}>
          <Marker position={position} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
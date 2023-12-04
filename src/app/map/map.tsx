
'use client'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useEffect, useState } from 'react';
import axios,{AxiosResponse} from 'axios'

// Suponha que esta é a sua lista de coordenadas.
const lista: { lat: number; lng: number }[] = [
  { lat: -23.5505, lng: -46.6333 },
  { lat: -22.9068, lng: -43.1729 },
  // Adicione mais coordenadas conforme necessário.
];

// Faz uma requisição para cada conjunto de coordenadas na lista.
lista.forEach(async (coordenadas) => {
  try {
    // Substitua 'http://meuservidor.com/api/minha-rota' pela URL do seu serviço de geolocalização.
    // Substitua 'minhasCoordenadas' pelo nome do parâmetro esperado pelo seu serviço de geolocalização.

    const response: AxiosResponse = await axios.get('http://localhost:8081/coords', {
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});

const Map = () => {
  const [position, setPosition] = useState<{ lat: number; lng: number }>({ lat: -23.5505, lng: -46.6333 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Atualiza a posição a cada 5 segundos.
      setPosition((prevPosition) => ({
        lat: prevPosition.lat + 0.001, // Altere esses valores conforme necessário.
        lng: prevPosition.lng + 0.001, // Altere esses valores conforme necessário.
      }));
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Remova 'position' das dependências do hook useEffect.

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
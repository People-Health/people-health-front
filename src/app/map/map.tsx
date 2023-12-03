
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

    const response: AxiosResponse = await axios.get('http://localhost:3004/map', {
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




// 'use client'
// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import io from 'socket.io-client';

// const containerStyle = {
//   width: '100%',
//   height: '650px',
// };

// const center = {
//   lat: -22.833969889616544, // localizacao da PUC Campinas lat:-22.833969889616544, lng:-47.05262714433426 
//   lng: -47.05262714433426,
// };

// const Mapa: React.FC = () => {
//   const [ambulanceLocations, setAmbulanceLocations] = useState([
//     { id: 1, lat: -22.833969889616544, lng: -47.05262714433426 },
//     { id: 2, lat: -22.83627477083273, lng: -47.05308262187362 }, //-22.83627477083273, -47.05308262187362 localizacao OXXO lado da PUC Campinas
//     { id: 3, lat: -22.824947851407142, lng: -47.095354028810654 }, // -22.824947851407142, -47.095354028810654 localizacao do GATE 22
//   ]);

//   useEffect(() => {
//     const socket = io('http://localhost:3001'); // Substitua pelo endereço do seu servidor Socket.IO

//     socket.on('updateLocation', (updatedLocation) => {
//       setAmbulanceLocations((prevLocations) =>
//         prevLocations.map((location) =>
//           location.id === updatedLocation.id ? updatedLocation : location
//         )
//       );
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY">
//       <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
//         {ambulanceLocations.map((ambulance) => (
//           <Marker key={ambulance.id} position={{ lat: ambulance.lat, lng: ambulance.lng }} />
//         ))}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default Mapa;

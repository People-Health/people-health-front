'use client'
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useEffect, useState } from 'react';
//import axios,{AxiosResponse} from 'axios'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const lista: { lat: number; lng: number }[] = [
  { lat: -23.5505, lng: -46.6333 },
  { lat: -22.9068, lng: -43.1729 },
  // Adicione mais coordenadas conforme necessário.
];

// // Faz uma requisição para cada conjunto de coordenadas na lista.
// lista.forEach(async (coordenadas) => {
//   try {
//     // Substitua 'http://meuservidor.com/api/minha-rota' pela URL do seu serviço de geolocalização.
//     // Substitua 'minhasCoordenadas' pelo nome do parâmetro esperado pelo seu serviço de geolocalização.
//
//     const response: AxiosResponse = await axios.get('http://localhost:8081/coords', {
//       auth: {
//         username: 'user',
//         password: 'password',
//       }
//     });
//
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// });







// Crie uma interface para representar o formato do token de autenticação
interface AuthToken {
  token: string;
}

async function authenticate(): Promise<AuthToken> {
  const response = await axios.post('https://localhost:8081/coords');
  return response.data;

}

async function fetchDataWithAuth(url: string): Promise<AxiosResponse> {
  // Obtenha o token de autenticação

  // Configure o cabeçalho de autorização com o token

  // Faça a solicitação usando o Axios com a configuração personalizada
  const response = await axios.get(url, {
    proxy: {
      host: '0.0.0.0',
      port: 8081, // Replace with your proxy port
      protocol: 'http', // Change to 'http' for HTTP proxy
      // Optionally, you can provide authentication credentials if your proxy requires them
    },
  });
  console.log(response);
  // Retorne a resposta
  return response;
}

// Exemplo de uso
const apiUrl = 'http://localhost:8081/coords';
fetchDataWithAuth(apiUrl)
    .then((response) => {
        console.log('Dados recebidos:', response.data);
        setPos(response.data['1']);
        setPosition(response.data['1']);
    })
    .catch((error) => {
      console.error('Erro ao fazer a solicitação:', error.message);
    });


//     const response: AxiosResponse = await axios.get('http://localhost:8081/coords', {
//       auth: {
//         username: 'user',
//         password: 'password'
//         }
    
//     });

//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// });

// function getCoords (){
//   axios.get('http://localhost:8081/coords', {
//       auth: {
//         username: 'user',
//         password: 'password'
//         }
//
//     }).then((response)=>{
//       console.log(response.data);
//     }).catch((error)=>{
//       console.error(error);
//     })
//
// }

const Map = () => {
  const [position, setPosition] = useState<{ lat: number; lng: number }>({ lat: -23.5505, lng: -46.6333 });

  useEffect(() => {
    //getCoords();
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
          <Marker position={position!} />
        </GoogleMap>
  
      </LoadScript>
      <h1>texto:{JSON.stringify(pos)}</h1>
     
    </div>
  );
};

export default Map;
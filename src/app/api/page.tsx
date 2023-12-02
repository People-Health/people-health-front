// // pages/index.tsx (ou outro arquivo)

// import axios from 'axios';

// const fetchData = async () => {
//   try {
//     const response = await axios.get('/api/nextapiresponse');
//     console.log(response.data);
//   } catch (error) {
//     console.error('Erro na solicitação da API:', error);
//   }
// };

// fetchData();
// 'use client'
// import Header from '../component.header/header';
// import Footer from '../component.footer/footer';
// import LogoFaixa from '../component.logoFaixa/logoFaixa';
// import { atualizarLocalizacoes } from './localizacao';

// // Chame a função para iniciar a atualização da localização por 3 iterações, por exemplo
// atualizarLocalizacoes(3);

// const Page: React.FC=()=>{
//   return(
//     <div>
//     <LogoFaixa/>
//     <Header option={1}/>
//     <Footer/>
//     </div>
//   )
// };

// export default Page;






// 'use client'
// import { useEffect } from 'react';
// import Footer from '../component.footer/footer';
// import Header from '../component.header/header';

// interface CustomPosition {
//   coords: {
//     latitude: number;
//     longitude: number;
//   };
// }

// async function obterLocalizacao(): Promise<CustomPosition> {
//   return new Promise<CustomPosition>((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const customPosition: CustomPosition = {
//           coords: {
//             latitude: position.coords.latitude,
//             longitude: position.coords.longitude,
//           },
//         };
//         resolve(customPosition);
//       },
//       reject
//     );
//   });
// }

// // const Mapa: React.FC =() =>{
// //   return(
// //     <div>
// //       <Header option={1}/>
// //       <Mapa/>
// //       <Footer/>
// //     </div>
// //   )
// // }
// export default function Localizacao() {
//   useEffect(() => {
//     const atualizarLocalizacoes = async (iteracoes: number) => {
//       for (let i = 0; i < iteracoes; i++) {
//         try {
//           const position = await obterLocalizacao();
//           const latitude = position.coords.latitude;
//           const longitude = position.coords.longitude;

//           console.log(`Iteração ${i + 1}: Latitude: ${latitude}, Longitude: ${longitude}`);
//         } catch (error) {
//           console.error('Erro ao obter a localização:', error);
//         }

//         await new Promise(resolve => setTimeout(resolve, 5000)); // Aguarda 5 segundos entre as iterações
//       }
//     };

//     atualizarLocalizacoes(3); // Atualiza a localização por 3 iterações quando o componente é montado
//   }, []);

//    <div>Verifique o console para ver as atualizações de localização.</div>;
// }








// 'use client'
// import React, { useEffect, useState } from 'react';
// import dynamic from 'next/dynamic';
// import { LatLngExpression } from 'leaflet';

// // Carregando o componente Map dinamicamente para evitar problemas no SSR
// const Map = dynamic(
//   () => import('react-leaflet').then((mod) => mod.MapContainer),
//   { ssr: false }
// );
// const TileLayer = dynamic(
//   () => import('react-leaflet').then((mod) => mod.TileLayer),
//   { ssr: false }
// );
// const Marker = dynamic(
//   () => import('react-leaflet').then((mod) => mod.Marker),
//   { ssr: false }
// );

// const MyMapComponent = () => {
//   const [position, setPosition] = useState<LatLngExpression>([0, 0]);

//   useEffect(() => {
//     if (!navigator.geolocation) {
//       console.log('Geolocation is not supported by your browser');
//     } else {
//       const watchId = navigator.geolocation.watchPosition((position) => {
//         setPosition([position.coords.latitude, position.coords.longitude]);
//       }, () => {}, {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0
//       });

//       // Limpar o watchId quando o componente for desmontado
//       return () => navigator.geolocation.clearWatch(watchId);
//     }
//   }, []);

//   return (
//     <Map center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <Marker position={position} />
//     </Map>
//   );
// };

// export default MyMapComponent;






//Esse esta funcionando a localizacao da pessoa em si pelo pc e celular ⬇️⬇️⬇️⬇️

// 'use client'
// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const MyMapComponent = () => {
//   const [position, setPosition] = useState({ lat: 0, lng: 0 });

//   useEffect(() => {
//     if (!navigator.geolocation) {
//       console.log('Geolocation is not supported by your browser');
//     } else {
//       const watchId = navigator.geolocation.watchPosition((position) => {
//         setPosition({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//       }, () => {}, {
//         enableHighAccuracy: true,
//         timeout: 0.200,
//         maximumAge: 0
//       });

//       // Limpar o watchId quando o componente for desmontado
//       return () => navigator.geolocation.clearWatch(watchId);
//     }
//   }, []);

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY">
//       <GoogleMap
//         mapContainerStyle={{ height: "100vh", width: "100%" }}
//         center={position}
//         zoom={10}
//       >
//         <Marker position={position} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MyMapComponent;








//Esse tambem esta funcionando a localizacao da pessoa em si pelo pc e celular ⬇️⬇️⬇️⬇️

'use client'
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MyMapComponent = () => {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [startPoint, setStartPoint] = useState({ lat: 0, lng: 0 });
  const [endPoint, setEndPoint] = useState({ lat: 0, lng: 0 });

  // Atualiza a posição atual do usuário
  useEffect(() => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      const watchId = navigator.geolocation.watchPosition((position) => {
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      }, () => {}, {
        enableHighAccuracy: true,
        timeout: 0.010,
        maximumAge: 0
      });

      // Limpar o watchId quando o componente for desmontado
      return () => navigator.geolocation.clearWatch(watchId);
    }
  }, []);

  // Definir o ponto de partida e o ponto de chegada
  useEffect(() => {
    setStartPoint({ lat: -23.5505, lng: -46.6333 }); // São Paulo, por exemplo
    setEndPoint({ lat: -22.9068, lng: -43.1729 }); // Rio de Janeiro, por exemplo
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY">
      <GoogleMap
        mapContainerStyle={{ height: "100vh", width: "100%" }}
        center={position}
        zoom={10}
      >
        <Marker position={position} label="Você está aqui" />
        <Marker position={startPoint} label="Ponto de partida" />
        <Marker position={endPoint} label="Ponto de chegada" />
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;









// 'use client'
// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

// const MyMapComponent = () => {
//   const [position, setPosition] = useState({ lat: 0, lng: 0 });
//   const [startPoint, setStartPoint] = useState({ lat: 0, lng: 0 });
//   const [endPoint, setEndPoint] = useState({ lat: 0, lng: 0 });
//   const [directions, setDirections] = useState(null);

//   // Atualiza a posição atual do usuário
//   useEffect(() => {
//     if (!navigator.geolocation) {
//       console.log('Geolocation is not supported by your browser');
//     } else {
//       const watchId = navigator.geolocation.watchPosition((position) => {
//         setPosition({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//       }, () => {}, {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0
//       });

//       // Limpar o watchId quando o componente for desmontado
//       return () => navigator.geolocation.clearWatch(watchId);
//     }
//   }, []);

//   // Definir o ponto de partida e o ponto de chegada
//   useEffect(() => {
//     setStartPoint({ lat: -23.5505, lng: -46.6333 }); // São Paulo, por exemplo
//     setEndPoint({ lat: -22.9068, lng: -43.1729 }); // Rio de Janeiro, por exemplo
//   }, []);

//   const handleDirectionsResponse = (response) => {
//     if (response !== null) {
//       if (response.status === "OK") {
//         setDirections(response.result);
//       } else {
//         console.log('response: ', response);
//       }
//     }
//   };

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY">
//       <GoogleMap
//         mapContainerStyle={{ height: "100vh", width: "100%" }}
//         center={position}
//         zoom={10}
//       >
//         <Marker position={position} label="Você está aqui" />
//         <Marker position={startPoint} label="Ponto de partida" />
//         <Marker position={endPoint} label="Ponto de chegada" />

//         <DirectionsService
//           // required: start and end
//           options={{
//             destination: endPoint,
//             origin: startPoint,
//             travelMode: 'DRIVING'
//           }}
//           callback={handleDirectionsResponse}
//         />

//         {directions && <DirectionsRenderer directions={directions} />}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MyMapComponent;










// 'use client'
// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

// const MyMapComponent = () => {
//   const [position, setPosition] = useState({ lat: 0, lng: 0 });
//   const [startPoint, setStartPoint] = useState({ lat: 0, lng: 0 });
//   const [endPoint, setEndPoint] = useState({ lat: 0, lng: 0 });
//   const [directions, setDirections] = useState(null);
//   const [routeReady, setRouteReady] = useState(false);

//   // Atualiza a posição atual do usuário
//   useEffect(() => {
//     if (!navigator.geolocation) {
//       console.log('Geolocation is not supported by your browser');
//     } else {
//       const watchId = navigator.geolocation.watchPosition((position) => {
//         setPosition({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude,
//         });
//       }, () => {}, {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0
//       });

//       // Limpar o watchId quando o componente for desmontado
//       return () => navigator.geolocation.clearWatch(watchId);
//     }
//   }, []);

//   // Definir o ponto de partida e o ponto de chegada
//   useEffect(() => {
//     setStartPoint({ lat: -23.5505, lng: -46.6333 }); // São Paulo, por exemplo
//     setEndPoint({ lat: -22.9068, lng: -43.1729 }); // Rio de Janeiro, por exemplo
//   }, []);

//   const handleDirectionsResponse = (response) => {
//     if (response !== null) {
//       if (response.status === "OK") {
//         setDirections(response.result);
//       } else {
//         console.log('response: ', response);
//       }
//     }
//   };

//   return (
//     <div>
//       <LoadScript googleMapsApiKey="AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY">
//         <GoogleMap
//           mapContainerStyle={{ height: "100vh", width: "100%" }}
//           center={position}
//           zoom={10}
//         >
//           <Marker position={position} label="Você está aqui" />
//           <Marker position={startPoint} label="Ponto de partida" />
//           <Marker position={endPoint} label="Ponto de chegada" />

//           {routeReady && (
//             <DirectionsService
//               // required: start and end
//               options={{
//                 destination: endPoint,
//                 origin: startPoint,
//                 travelMode: 'DRIVING'
//               }}
//               callback={handleDirectionsResponse}
//             />
//           )}

//           {directions && <DirectionsRenderer directions={directions} />}
//         </GoogleMap>
//       </LoadScript>

//       <button onClick={() => setRouteReady(true)}>OK</button>
//     </div>
//   );
// };

// export default MyMapComponent;




// 'use client'
// import React, { useEffect, useRef, useState } from 'react';
// import { GoogleMap, LoadScript, Marker, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
// import { DirectionsResult } from 'google-maps-react';

// const MyMapComponent = () => {
//   const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
//   const [startPoint, setStartPoint] = useState<{ lat: number; lng: number } | null>(null);
//   const [endPoint, setEndPoint] = useState<{ lat: number; lng: number } | null>(null);
//   const [directions, setDirections] = useState(null);
//   const [routeReady, setRouteReady] = useState(false);
//   const directionsCallback = useRef(null);

//   // Suponha que startPoint e endPoint são definidos em algum lugar do seu código.
//   // Por exemplo, você pode definir eles quando o usuário clica em um botão ou seleciona uma opção em um formulário.

//   useEffect(() => {
//     if (!navigator.geolocation) {
//       alert('Desculpe, a geolocalização não é suportada pelo seu navegador.');
//       return;
//     }

//     const watchId = navigator.geolocation.watchPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setPosition({ lat: latitude, lng: longitude });
//       },
//       (error) => {
//         console.error(error);
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0,
//       }
//     );

//     return () => {
//       navigator.geolocation.clearWatch(watchId);
//     };
//   }, []);



//   directionsCallback.current = (response: DirectionsResult | null) => {
//     if (response !== null) {
//       if (response.status === 'OK') {
//         setDirections(response);
//       } else {
//         console.error('Directions request failed with status:', response.status);
//       }
//     } else {
//       console.error('Invalid or unexpected response:', response);
//     }
//   };
  
  

//   const handleOkClick = () => {
//     setRouteReady(true);
//   };

//   return (
//     <div>
//       {position && (
//         <LoadScript googleMapsApiKey="AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY">
//           <GoogleMap mapContainerStyle={{ height: '100vh', width: '100%' }} center={position} zoom={10}>
//             <Marker position={position} />
//             {startPoint && <Marker position={startPoint} />}
//             {endPoint && <Marker position={endPoint} />}
//             {routeReady && startPoint && endPoint && (
//               <DirectionsService
//                 options={{
//                   destination: endPoint,
//                   origin: startPoint,
//                   travelMode: 'DRIVING',
//                 }}
//                 callback={directionsCallback.current}
//               />
//             )}
//             {directions && <DirectionsRenderer directions={directions} />}
//           </GoogleMap>
//           <button onClick={handleOkClick}>OK</button>
//         </LoadScript>
//       )}
//     </div>
//   );
// };

// export default MyMapComponent;





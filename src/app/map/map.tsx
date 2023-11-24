// "use client";
// import { useState } from 'react';
// import { MapContainer, TileLayer, Popup } from 'react-leaflet';
// import { LatLngExpression } from 'leaflet';
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import React, { useEffect } from "react";
// import { Loader } from "@googlemaps/js-api-loader";




// export default function Map() {
//   const mapRef = React.useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const initMap = async () => {
//       //process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
//       const loader = new Loader({
//         apiKey: "AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY",
//         // apiKey: 'AIzaSyCTyXYo2p8_QWgEWnQhNvs0oq_RyOIsA7Q', api do kevin
//         version: "weekly",
//       });

//       const { Map } = await loader.importLibrary("maps");

//       const position = {
//         lat: -22.834233317306676, //localizacao - PUC Campinas
//         lng: -47.04815712668725,
//         // -22.834233317306676, -47.04815712668725
//       };

//       // Defina as coordenadas para o marcador
//       const markerPosition = {
//         lat: -22.834233317306676,
//         lng: -47.04815712668725,
//       };

//       // Defina as configurações do mapa
//       const mapContainerStyle: React.CSSProperties = {
//         width: "100%",
//         height: "400px",
//       };

//       // Componente do mapa
//       function MyMap() {
//         return (
//           <LoadScript googleMapsApiKey="AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY">
//             <GoogleMap
//               mapContainerStyle={mapContainerStyle}
//               center={markerPosition}
//               zoom={8}
//             >
//               {/* Adicione o marcador */}
//               <Marker position={markerPosition} />
//             </GoogleMap>
//           </LoadScript>
//         );
//       }

      

//       //map options
//       const mapOptions: google.maps.MapOptions = {
//         center: position,
//         zoom: 15,
//         // mapId: "MY_NEXTJS_MAPID",
//       };

//       // Set up map
//       const map = new google.maps.Map(mapRef.current as HTMLDivElement, mapOptions);
//     };
//     initMap();
//     //https://www.youtube.com/watch?v=LgTan_NZnAg&t=477s&ab_channel=Grepsoft
//   }, []);

//   return <div style={{ height: "600px" }} ref={mapRef} />;
// }

// //codigo abaixo é o adicionado mais recente ao projeto

// // const PositionTracker: React.FC = () => {
// //   const [position, setPosition] = useState<LatLngExpression>([0, 0]);

// //   const handleClick = (e: { latlng: LatLngExpression }) => {
// //     setPosition(e.latlng);
// //   };

// //   return (
// //     <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }} onClick={handleClick}>
// //       <TileLayer
// //         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //       />
// //       <Marker position={position}>
// //         <Popup>
// //           Latitude: {position[0]} <br />
// //           Longitude: {position[1]}
// //         </Popup>
// //       </Marker>
// //     </MapContainer>
// //   );
// // };


// import { InfoWindow } from "@react-google-maps/api";

// const PositionTracker: React.FC = () => {
//   const [position, setPosition] = useState({ lat: 0, lng: 0 });
//   const [map, setMap] = useState<google.maps.Map | null>(null);

//   const onLoad = (map: google.maps.Map) => {
//     setMap(map);
//   };

//   const onMapClick = (e: google.maps.MapMouseEvent) => {
//     const newPosition = { lat: e.latLng.lat(), lng: e.latLng.lng() };
//     setPosition(newPosition);
//   };

//   useEffect(() => {
//     // Use map to perform any additional operations when the map changes
//     if (map) {
//       // You can perform additional operations with the Google Maps API here
//     }
//   }, [map]);

//   return (
//     <LoadScript googleMapsApiKey="AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY">
//       <GoogleMap
//         center={position}
//         zoom={13}
//         onLoad={onLoad}
//         onClick={onMapClick}
//       >
//         <Marker position={position} />
//         <InfoWindow position={position}>
//           <div>
//             Latitude: {position.lat} <br />
//             Longitude: {position.lng}
//           </div>
//         </InfoWindow>
//       </GoogleMap>
//     </LoadScript>
//   );
// };


// export {Map}
// export {PositionTracker}

// src/App.tsx
'use client'
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Image from 'next/image';
import { useState } from 'react';
import { MapContainer, TileLayer, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { GoogleMap, LoadScript} from "@react-google-maps/api";
import { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export function Map() {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      //process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
      const loader = new Loader({
        apiKey: "AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY",
        // apiKey: 'AIzaSyCTyXYo2p8_QWgEWnQhNvs0oq_RyOIsA7Q', api do kevin
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      const position = {
        lat: -22.834233317306676, //localizacao - PUC Campinas
        lng: -47.04815712668725,
        // -22.834233317306676, -47.04815712668725
      };

      // Defina as coordenadas para o marcador
      const markerPosition = {
        lat: -22.834233317306676,
        lng: -47.04815712668725,
      };

      // Defina as configurações do mapa
      const mapContainerStyle: React.CSSProperties = {
        width: "100%",
        height: "400px",
      };

      // Componente do mapa
      function MyMap() {
        return (
          <LoadScript googleMapsApiKey="AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={markerPosition}
              zoom={8}
            >
              {/* Adicione o marcador */}
              <Marker position={markerPosition} />
            </GoogleMap>
          </LoadScript>
        );
      }

      

      //map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 15,
        // mapId: "MY_NEXTJS_MAPID",
      };

      // Set up map
      const map = new google.maps.Map(mapRef.current as HTMLDivElement, mapOptions);
    };
    initMap();
    //https://www.youtube.com/watch?v=LgTan_NZnAg&t=477s&ab_channel=Grepsoft
  }, []);

  return <div style={{ height: "600px" }} ref={mapRef} />;
}
interface MarkerProps {
  title: string;
  lat: number;
  lng: number;
}

const mapStyles: React.CSSProperties = {
  width: '100%',
  height: '100%'
};

const markerStyle: React.CSSProperties = {
  height: '50px',
  width: '50px',
  marginTop: '-50px'
};

const imgStyle: React.CSSProperties = {
  height: '100%'
};



const Marker: React.FC<MarkerProps> = ({ title, lat, lng }) => (
  <div style={markerStyle}>
    <img style={imgStyle} src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png" alt={title} />
    <h3>{title}</h3>
  </div>
);


class App extends Component {
  render() {
    return (
      <div>
        <GoogleMapReact
          style={mapStyles}
          bootstrapURLKeys={{ key: 'AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY' }}
          defaultCenter={{ lat: -22.834233317306676, lng:  -47.04815712668725 }} //-22.834233317306676, -47.04815712668725
          defaultZoom={15}
        >
          <Marker
            title={'Current Location'}
            lat={-22.834233317306676}
            lng={ -47.04815712668725}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default App;

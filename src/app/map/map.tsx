// "use client";

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


import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
import { LatLngExpression } from 'leaflet';

const [position, setPosition] = useState<LatLngExpression>([0, 0]);

const MapWithMarker = () => {
 const [position, setPosition] = useState(null);

 const MapWithMarker= ()[position, setPosition] = useState<{lat: number, lng: number}>({
  lat: 0,
  lng: 0,
 });
 
 useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          setPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error:', error);
        },
        { enableHighAccuracy: true }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    } else {
      alert('Geolocation is not supported by this browser.');
    }
 }, []);

 return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {position && (
          <Marker position={position}>
            <Popup>Your Current Location</Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
 );
};

export default MapWithMarker;
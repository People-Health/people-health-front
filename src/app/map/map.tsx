'use client'
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import io from 'socket.io-client';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -23.550520,
  lng: -46.633308,
};

const Map: React.FC = () => {
  const [ambulanceLocations, setAmbulanceLocations] = useState([
    { id: 1, lat: -23.550520, lng: -46.633308 },
    { id: 2, lat: -23.545520, lng: -46.628308 },
    { id: 3, lat: -23.560520, lng: -46.638308 },
  ]);

  useEffect(() => {
    const socket = io('http://localhost:3001'); // Substitua pelo endereço do seu servidor Socket.IO

    socket.on('updateLocation', (updatedLocation) => {
      setAmbulanceLocations((prevLocations) =>
        prevLocations.map((location) =>
          location.id === updatedLocation.id ? updatedLocation : location
        )
      );
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        {ambulanceLocations.map((ambulance) => (
          <Marker key={ambulance.id} position={{ lat: ambulance.lat, lng: ambulance.lng }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;

// AmbulanceMap.tsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import io from 'socket.io-client';

interface Ambulance {
  id: string;
  lat: number;
  lng: number;
}

const AmbulanceMap: React.FC = () => {
  const [ambulances, setAmbulances] = useState<Ambulance[]>([]);

  useEffect(() => {
    const socket = io('http://localhost:3000');

    // Recebe a localização inicial das ambulâncias
    socket.on('initialAmbulanceLocations', (initialAmbulances: Ambulance[]) => {
      setAmbulances(initialAmbulances);
    });

    // Atualiza as localizações em tempo real
    socket.on('updateAmbulanceLocations', (updatedAmbulances: Ambulance[]) => {
      setAmbulances(updatedAmbulances);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <MapContainer center={[-23.5505, -46.6333]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {ambulances.map((ambulance) => (
        <Marker
          key={ambulance.id}
          position={[ambulance.lat, ambulance.lng]}
          icon={new L.Icon({ iconUrl: '/ambulance-icon.png', iconSize: [32, 32] })}
        />
      ))}
    </MapContainer>
  );
};

export default AmbulanceMap;

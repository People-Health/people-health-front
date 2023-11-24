"use client";
import { useState } from 'react';
import { MapContainer, TileLayer, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function Map() {
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

//codigo abaixo é o adicionado mais recente ao projeto

const PositionTracker: React.FC = () => {
  const [position, setPosition] = useState<LatLngExpression>([0, 0]);

  const handleClick = (e: { latlng: LatLngExpression }) => {
    setPosition(e.latlng);
  };

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }} onClick={handleClick}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Latitude: {position[0]} <br />
          Longitude: {position[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export {Map}
export {PositionTracker}

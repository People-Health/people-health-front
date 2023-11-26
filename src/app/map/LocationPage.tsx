// LocationPage.tsx
import Map from './map';

const LocationPage: React.FC = () => {
  const location = { lat: -23.5505, lng: -46.6333 }; // Coordenadas para São Paulo, Brasil

  return (
    <div>
      <h1>Localização</h1>
      <Map location={location} />
    </div>
  );
};

export default LocationPage;

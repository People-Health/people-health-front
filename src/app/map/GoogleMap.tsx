// components/GoogleMap.tsx
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -23.5505,
  lng: -46.6333,
};

const GoogleMapComponent: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY"> AIzaSyAhZlf9fcGxTFa6YKRghtLhI_pawBBM8aY
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13} />
    </LoadScript>
  );
};

export default GoogleMapComponent;

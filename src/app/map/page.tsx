
// import Map from "./map";
// import Footer from '../footer/footer';
// import Header from '../header/header';


// export default function MapPage(){


//     return (
//        <>
//        <Header option={1}/>
//         <h1>Map page. Aqui é a página do mapa</h1>
//         <Map></Map>
//         <Footer/>
//        </> 
        

//     )
// }

// import MapWithMarker from '../map/map';
// import Footer from '../footer/footer';
// import Header from '../header/header';
// import MyMap from "./map"

// const Mapa = () => {
//  return (
//     <div>
//         <Header option={1}/>
//       <h1>Welcome to Next.js!</h1>
      
//       <MapWithMarker />
//       <Footer/>
//     </div>
//  );
// };

// export default Mapa;







//atualizacao do codigo para nova branch


// pages/index.tsx
// import AmbulanceMap from './AmbulanceMap';

// const HomePage: React.FC = () => {
//   return (
//     <div>
//       <h1>Mapa de Ambulâncias em Tempo Real</h1>
//       <AmbulanceMap />
//     </div>
//   );
// };

// export default HomePage;


// pages/index.tsx
import GoogleMapComponent from './GoogleMap';
import Header from '../header/header';
import Footer from '../footer/footer';
import websocket from '@pusher/pusher-websocket-react-native'

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Mapa do Google</h1>
      <Header option={1}/>
      <GoogleMapComponent />
      <Footer/>
    </div>
  );
};

export default HomePage;


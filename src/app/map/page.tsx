
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

import MapWithMarker from '../map/map';
import Footer from '../footer/footer';
import Header from '../header/header';

const Map = () => {
 return (
    <div>
        <Header option={1}/>
      <h1>Welcome to Next.js!</h1>
      <MapWithMarker />
      <Footer/>
    </div>
 );
};

export default Map;
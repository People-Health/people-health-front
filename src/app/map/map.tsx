"use client"

import React,{useEffect} from 'react';
import {Loader} from '@googlemaps/js-api-loader'

export default function Map(){
    const mapRef=React.useRef<HTMLDivElement>(null);

    useEffect(()=>{
        const initMap=async ()=>{
           

        //process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        const loader= new Loader({
            apiKey: 'AIzaSyCTyXYo2p8_QWgEWnQhNvs0oq_RyOIsA7Q',
            version: 'weekly'
        });

        const {Map} = await loader.importLibrary('maps');

        const position={
            lat:43.642693,
            lng: -79.3871189
        }
        //map options
        const mapOptions: google.maps.MapOptions={
            center:position,
            zoom:17,
            mapId:'MY_NEXTJS_MAPID',

        }
        //set up map
        const map = new Map(mapRef.current as HTMLDivElement,mapOptions)

    }
    initMap();
    //https://www.youtube.com/watch?v=LgTan_NZnAg&t=477s&ab_channel=Grepsoft

    },[]);


    return (
        <div style={{height:'600px'}} ref={mapRef}/>
    );
}
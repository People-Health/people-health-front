// 'use client'
// //import { useState, useEffect } from 'react';

// const http = require('http');
// const server = http.createServer();
// //const locations = [];
// const [locations, setLocations] = useState([]);
// const io = require('socket.io')(server, {
//   cors: {
//     origin: 'http://localhost:3001', // Substitua pelo endereço do seu cliente Next.js
//   },
// });


// io.on('connection', (socket) => {
//   console.log('Cliente conectado');

//   // Enviar localizações existentes para o novo cliente
//   socket.emit('initialLocations', locations);

//   // Restante do código...
// });


// setInterval(() => {
//   const updatedLocation = {
//     id: Math.floor(Math.random() * 3) + 1,
//     lat: -22.833969889616544 + Math.random() * 0.02,
//     lng: -47.05262714433426 + Math.random() * 0.02,
//   };

//   // Adicionar a nova localização ao array
//   locations.push(updatedLocation);

//   // Enviar a localização atualizada para todos os clientes
//   io.emit('updateLocation', updatedLocation);
// }, 5000);



// useEffect(() => {
//   socket.on('initialLocations', (initialLocations) => {
//     setLocations(initialLocations);
//   });

//   return () => {
//     // Limpar o ouvinte ao desmontar o componente
//     socket.off('initialLocations');
//   };
// }, []);



// useEffect(() => {
//   socket.on('updateLocation', (updatedLocation) => {
//     setLocations((prevLocations) => [...prevLocations, updatedLocation]);
//   });

//   return () => {
//     // Limpar o ouvinte ao desmontar o componente
//     socket.off('updateLocation');
//   };
// }, []);



// io.on('connection', (socket) => {
//   console.log('Cliente conectado');

//   // Simule a atualização de localização em intervalos regulares
//   setInterval(() => {
//     const updatedLocation = {
//       id: Math.floor(Math.random() * 3) + 1,
//       lat: -22.833969889616544 + Math.random() * 0.02,
//       lng: -47.05262714433426 + Math.random() * 0.02,
//     };

//     socket.emit('updateLocation', updatedLocation);
//   }, 5000);

//   socket.on('disconnect', () => {
//     console.log('Cliente desconectado');
//   });
// });

// // const PORT = 3000;
// // server.listen(PORT, () => {
// //   console.log(`Servidor Socket.IO ouvindo na porta ${PORT}`);
// // });

// const port = 3001; // escolha um número de porta disponível
// server.listen(port, () => {
//   console.log(`Servidor rodando na porta ${port}`);
// });


const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3001', // Substitua pelo endereço do seu cliente Next.js
  },
});

// Movido para fora do escopo do módulo
const locations = [];

io.on('connection', (socket) => {
  console.log('Cliente conectado');

  // Enviar localizações existentes para o novo cliente
  socket.emit('initialLocations', locations);

  // Ouvir as atualizações de localização do cliente
  socket.on('updateLocation', (updatedLocation) => {
    // Adicionar a nova localização ao array
    locations.push(updatedLocation);

    // Enviar a localização atualizada para todos os clientes
    io.emit('updateLocation', updatedLocation);
  });

  // Simule a atualização de localização em intervalos regulares
  const intervalId = setInterval(() => {
    const updatedLocation = {
      id: Math.floor(Math.random() * 3) + 1,
      lat: -22.833969889616544 + Math.random() * 0.02,
      lng: -47.05262714433426 + Math.random() * 0.02,
    };

    // Adicionar a nova localização ao array
    locations.push(updatedLocation);

    // Enviar a localização atualizada para todos os clientes
    io.emit('updateLocation', updatedLocation);
  }, 5000);

  // Lidar com a desconexão do cliente
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });

  // Limpar o intervalo ao desmontar o componente
  socket.on('disconnect', () => {
    clearInterval(intervalId);
  });
});

const port = 3001;
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

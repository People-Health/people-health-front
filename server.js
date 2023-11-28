// // server.ts
// import express from 'express';
// import http from 'http';
// import { Server } from 'socket.io';
// //import io from 'socket.io-client';
// import cors from 'cors';
// import WebSocket from 'ws'
 
// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// //const socket = io('http://localhost:3000');

// // const corsOptions: cors.CorsOptions = {
// //   origin: 'http://localhost:3000',
// //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// //   credentials: true,
// // };

// app.use(cors(corsOptions));

// const PORT = process.env.PORT || 3000;

// io.on('connection', (socket) => {
//   console.log('Cliente conectado');

//   // Restante do código para o WebSocket

//   socket.on('disconnect', () => {
//     console.log('Cliente desconectado');
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Servidor WebSocket rodando na porta ${PORT}`);
// });

'use client'
const http = require('http');
const server = http.createServer();
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3001', // Substitua pelo endereço do seu cliente Next.js
  },
});

io.on('connection', (socket) => {
  console.log('Cliente conectado');

  // Simule a atualização de localização em intervalos regulares
  setInterval(() => {
    const updatedLocation = {
      id: Math.floor(Math.random() * 3) + 1,
      lat: -23.55 + Math.random() * 0.02,
      lng: -46.63 + Math.random() * 0.02,
    };

    socket.emit('updateLocation', updatedLocation);
  }, 5000);

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Servidor Socket.IO ouvindo na porta ${PORT}`);
// });

const port = 3001; // escolha um número de porta disponível
server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

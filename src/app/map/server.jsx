// server.js
const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('Cliente conectado');

  // Simulando a localização de três ambulâncias
  const ambulances = [
    { id: 'ambulance1', lat: -23.5505, lng: -46.6333 },
    { id: 'ambulance2', lat: -23.5500, lng: -46.6340 },
    { id: 'ambulance3', lat: -23.5510, lng: -46.6350 },
  ];

  // Envia a localização inicial das ambulâncias para o cliente
  socket.emit('initialAmbulanceLocations', ambulances);

  // Atualiza a localização das ambulâncias em intervalos regulares
  const updateLocations = () => {
    ambulances.forEach((ambulance) => {
      ambulance.lat += Math.random() * 0.001 - 0.0005;
      ambulance.lng += Math.random() * 0.001 - 0.0005;
    });

    io.emit('updateAmbulanceLocations', ambulances);
  };

  // Atualiza as localizações a cada 5 segundos
  const updateInterval = setInterval(updateLocations, 5000);

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
    clearInterval(updateInterval);
  });
});

server.listen(PORT, () => {
  console.log(`Servidor WebSocket rodando na porta ${PORT}`);
});

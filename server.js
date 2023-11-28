// server.ts
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
//import io from 'socket.io-client';
import cors from 'cors';
import WebSocket from 'ws'
 
const app = express();
const server = http.createServer(app);
const io = new Server(server);

//const socket = io('http://localhost:3000');

// const corsOptions: cors.CorsOptions = {
//   origin: 'http://localhost:3000',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
// };

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('Cliente conectado');

  // Restante do código para o WebSocket

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

server.listen(PORT, () => {
  console.log(`Servidor WebSocket rodando na porta ${PORT}`);
});

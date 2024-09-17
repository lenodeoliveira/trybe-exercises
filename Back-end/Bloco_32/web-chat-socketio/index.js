/* const express = require('express');
const app = express(); */
const app = require('express')();
const http = require('http').createServer(app);
const cors = require('cors');

const io = require('socket.io')(http, {
    cors: {
        orgin: 'http://localhost:3000',
        method: ['GET, POST']
    }
});

app.use(cors());

io.on('connection', (socket) => {
    console.log('Alguém se conectou');

    socket.on('disconnect', () => {
        console.log('Alguém saiu')
    });
    socket.on('mensagem', (msg) => {
      io.emit('serverMessage', { message: msg } );
    });

    socket.emit('message', ('seja bem vindo(a) ao TrybeChat'));

    socket.broadcast.emit('serverMessage', { message: 'Olá!, outra conexão!' });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
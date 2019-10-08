const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const socketio = require('socket.io');
const http = require('http');


const app = express();

//Serve para enviar requisicoes http
const server = http.Server(app);

//Serve para enviar requisicoes io(protocolo sincrono, n tem espera(Real-Time))
const io = socketio(server);

mongoose.connect('mongodb+srv://mateusmangueira:brasileiros199601@omnistackweek-f4k0y.mongodb.net/semanaOmniStack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Serve para guardar os IDs de todos usuarios conectados, nao eh melhor jeito de fazer...
const connectedUsers = {};

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;
    
    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    //Tem que ter esse return next para poder prosseguir com o fluxo da informacao para os proximos metodos .use()
    return next();
});

// GET, POST, PUT, DELETE

//req.query = Acessar query params, serve para filtrar info do BD.
//req.params = Acessar route params, serve para editar ou deletar usando um parametro
//req.body = Acessar corpo da requisicao para criacao ou edicao.

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

//Servidor ouve tanto reqs IO quanto reqs HTTP
server.listen(3333);
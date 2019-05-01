let express = require('express');
let http = require('http');
let app = express();
let server = http.createServer(app).listen(3000);
let io = require('socket.io')(server);

app.use(express.static('./public'));

io.on('connection', (socket) => {
    socket.on('chat', (message) => {
        socket.broadcast.emit('message', message)
    })
    socket.emit('message', 'Welcome to chat server');

})
console.log('Starting the server at http://localhost:3000/')
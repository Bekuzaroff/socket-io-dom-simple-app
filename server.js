const {createServer} = require('http');
const {Server} = require('socket.io');

const http_server = createServer();
const socket = new Server(http_server, {
    cors: {
        origin: 'http://127.0.0.1:5500'
    }
});
let messages = [];
socket.on('connection', (socket) => {
    socket.on('message', (data) => {
        messages.push(data);
        socket.emit('all_messages', messages)
    })
    console.log('connected');

    
});

http_server.listen(8000, () => {})
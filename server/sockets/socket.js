
const io = require('../server').io;

// Detect client connection
io.on('connection', (client) => {
    console.log('Client connected!');
    client.emit('sendMessage', {
        'user': 'USER',
        'message': 'Welcome to the server SOCKET.io DEMO!' 
    });

    // Detect client disconnection
    client.on('disconnect', () => {
        console.log('Client disconnected!');
    });

    // Listen client messages
    client.on('sendMessage', (msg, callback) => {
        console.log('[Message received]');
        console.log(msg);

        client.broadcast.emit('sendMessage', 'BROADCAST!!!');

        // Send feedback to client...
        // callback('Feedback message to client!');
    });
});
let socket = io();

// Detect server connection
socket.on('connect', function () {
    console.log('Connected to server!');
});

// Detect server disconnection
socket.on('disconnect', function () {
    console.log('Server connection lost!');
});

// Receive information
socket.on('sendMessage', function (msg) {
    console.log('[Message from server]');
    console.log(msg);
});

function sendMessage() {
    // Send information
    socket.emit('sendMessage', {
        user: 'USER',
        message: 'MESSAGE FROM CLIENT'
    }, function (response) {
        // Server feedback
        console.log('[Received feedback from server]');
        console.log('... \'' + response + '\'');
    });
}
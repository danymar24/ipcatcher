var http = require('http'),
    fs = require('fs'),
    // NEVER use a Sync function except at start-up!
    index = fs.readFileSync(__dirname + '/server.html');

// Send index.html to all requests
var app = http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(index);
});

// Socket.io server listens to our app
var io = require('socket.io').listen(app);

function requestDeviceInfo() {
    io.emit('getDeviceInfo', { message: 'getDeviceInfo'});
}


// Emit welcome message on connection
io.on('connection', function (socket) {
    // Send current time every 10 secs
    setInterval(requestDeviceInfo, 10000);
    console.log('Client connected');
    socket.emit('welcome', {
        message: 'Welcome!',
        id: socket.id
    });

    socket.on('info', function(data) {
        io.emit('deviceInfo', data);
    });
});

app.listen(3000);
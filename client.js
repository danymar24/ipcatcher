var io = require('socket.io-client')('http://localhost'),
    http = require('http'),
    os = require('os');

io.on('connect', function() {
    console.log('Connected to server');
    socket.on('getDeviceInfo', function () {
        http.get('http://icanhazip.com/', function (resp) { 
            var ip = '';
    
            resp.on('data', function (chunk) {  
                ip += chunk; 
            });
    
            resp.on('end', function () {  
                var info = {
                    name: os.hostname(),
                    ip: ip
                };
                console.log(info);
                io.emit('info', info); 
            });
    
        }).on("error", function (err) { 
            console.log("Error: " + err.message);
        });
    });
});

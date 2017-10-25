# ipcatcher
Catches the public ip of the connected devices. This is usefull when there is public ip and port forwarding, but there is no ddns suport.

## Server.js
Serves a html page that shows the public ip and name of the connected devices.

This server is intended to be run in a server where the domain is known, sush as a vps or ddns server, or where the ip is static.

## Client.js
This client connects to the server via socket.io, it transmits the device name and public ip address.

The client is intended to run where the ip is dynamic and a ddns cannot be used.
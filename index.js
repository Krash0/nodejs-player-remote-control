const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const robot = require("robotjs");
const io = new Server(server);

robot.setKeyboardDelay(0);

const allowed_methods = {
	play_pause: "space",
	backward: "left",
	forward: "right",
	volume_up: "audio_vol_up",
	volume_down: "audio_vol_down"
};

var pressed_keys = [];

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/player.html');
});

io.on('connection', (socket) => {
	console.log(`[${socket.id}] user connected.`);

	socket.on('press', (method_name) => {
		if(allowed_methods.hasOwnProperty(method_name)){
			console.log(`[${socket.id}] press: ${method_name}`);
			robot.keyTap(allowed_methods[method_name]);
		}
	});

	socket.on('toggle', (method) => {
		if(allowed_methods.hasOwnProperty(method.name)){
			console.log(`[${socket.id}] toggle ${method.toggle}: ${method.name}`);

			if(method.toggle == 'down') {
				// add to pressed_keys
				pressed_keys.push(allowed_methods[method.name]);
			}
			
			if(method.toggle == 'up') {
				// remove from pressed_keys
				pressed_keys.splice(pressed_keys.indexOf(allowed_methods[method.name]), 1);
			}
		}
	});

	socket.on('disconnect', () => {
		console.log(`[${socket.id}] user disconnected.`);
	});
});

setInterval(function() { 
	pressed_keys.forEach(function(name) {
		robot.keyTap(name);
	});
}, 125);

server.listen(3000, () => {
	console.log('listening on *:3000');
});
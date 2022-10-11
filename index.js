const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const robot = require("robotjs");
const io = new Server(server);

const allowed_methods = {
	play_pause: "space",
	backward: "left",
	forward: "right",
	volume_up: "audio_vol_up",
	volume_down: "audio_vol_down"
};

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
			robot.keyToggle(allowed_methods[method.name], method.toggle);
		}
	});

	socket.on('disconnect', () => {
		console.log(`[${socket.id}] user disconnected.`);
	});
});

server.listen(3000, () => {
	console.log('listening on *:3000');
});
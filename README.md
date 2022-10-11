# nodejs player remote control

Control a media player on mac, windows, linux using a remote control in the browser.

## why did I create this APP?
I wanted to watch anime on Crunchyroll on my samsung tv, sending it from my cell phone via airplay, but the 
content wouldn't load, so I ran Crunchyroll on the PC sending it to the TV, but I needed a method to control the 
player, there are already several apps that are used for this, but most of them release this Media Player 
function just by paying, so I decided to make mine only with the functions I needed.

## how use

Clone the project

```bash
  git clone https://github.com/Krash0/nodejs-player-remote-control.git
```

Enter the project directory

```bash
  cd nodejs-player-remote-control
```

Install the dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```

Access the web remote control using http://localhost:3000/ or http://LOCAL_IP:3000/

## observations:
For you to control the player (with the exception of increasing and decreasing the volume) the window has to be 
active, because the server simulates pressing the keys:
space = pause
left arrow = retrosseder
right arrow = forward

## screenshots

![App Screenshot](https://i.imgur.com/Kd67gjI.png)

## stack

**Front-end:** Bootstrap, Socket.io

**Back-end:** Node, Express, RobotJs, Socket.io

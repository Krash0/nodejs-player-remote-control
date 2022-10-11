#nodejs player remote control


Created with node and socket.io

Why did I create this APP?
I wanted to watch anime on Crunchyroll on my samsung tv, sending it from my cell phone via airplay, but the 
content wouldn't load, so I ran Crunchyroll on the PC sending it to the TV, but I needed a method to control the 
player, there are already several apps that are used for this, but most of them release this Media Player 
function just by paying, so I decided to make mine only with the functions I needed.

how install:
1. Install the dependencies using the command: npm install

how use:
1. Start using the command: node index.js
2. Access the web remote control using http://localhost:3000/ or http://LOCAL_IP:3000/

obs:
For you to control the player (with the exception of increasing and decreasing the volume) the window has to be 
active, because the server simulates pressing the keys:
space = pause
left arrow = retrosseder
right arrow = forward

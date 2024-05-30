
import { createBareServer } from '@tomphttp/bare-server-node';
import express from 'express';
import http from 'node:http';
//i think were imporitng shit here


//tf you mean "uv based proxy"
const app = express();
const bareServer = createBareServer("/bare/");
const server = http.createServer();
const PORT = 8080
app.use(express.static("./public"));

// porn block thanks to russell2259 for the code :D

server.on('request', (req, res) => {
    if (bareServer.shouldRoute(req)) bareServer.routeRequest(req, res);
    else app(req, res); 
});

server.on('upgrade', (req, socket, head) => {
    if (bareServer.shouldRoute(req)) bareServer.routeUpgrade(req, socket, head);
    else socket.end();
});

server.on("listening", () => {

    //We listen on port 8080 because i said so lmfaoa
    //at least i think?
    console.log('Were listedning on that port we call 8080 :3 at least i think dont quote me lol')
	console.log('femboys are cool :3')
	console.log('if you were wondering its http://localhost:8080')
})

//the sigma shutdown
process.on('SIGTERM', () => {
  debug('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    debug('HTTP server closed')
  })
})

server.listen({ port: PORT, })
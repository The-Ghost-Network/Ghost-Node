
import { createBareServer } from '@tomphttp/bare-server-node';
import express from 'express';
import http from 'node:http';
import decodeUrl from '@titaniumnetwork-dev/ultraviolet'
// i think were imporing shit here


const app = express();
const bare = createBareServer("/bare/");
const server = http.createServer();
const PORT = 8080;


app.use(express.static("./public"));

app.get('*', function(req, res) {
	res.send('404');
});

// bar
server.on("request", (req, res) => {
    if (bare.shouldRoute(req)) {
        bare.routeRequest(req, res);
    } else {
        app(req, res);
    }
});

server.on("upgrade", (req, socket, head) => {
    if (bare.shouldRoute(req)) {
        bare.routeUpgrade(req, socket, head);
    } else {
        socket.end();
    }
});


///idrk what port were listinging on
//dont quote me on that
server.on("listening", () => {
    console.log('We are listening on port 8080');
    console.log('Femboys are cool :3');
    console.log('If you were wondering, it\'s http://localhost:8080');
});

// The sigma shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
    });
});

server.listen({ port: PORT }, () => {
});

app.use((req, res, next) => {
    console.log(`Received request for: ${req.url}`);
    next();
});


import { createBareServer } from "@tomphttp/bare-server-node";
import http from "node:http";
import express from "express"
import  g  from "./server_lib/games.mjs"
import  a  from "./server_lib/apps.mjs"

const bare = createBareServer("/bare/");
const server = http.createServer();
const PORT = 8080;
const app = express(); 
const __dirname = process.cwd();

server.on('request', (req, res) => {
	if (bare.shouldRoute(req)) {
		bare.routeRequest(req, res);
	} else {
    app(req, res);
	}
});

server.on('upgrade', (req, socket, head) => {
	if (bare.shouldRoute(req)) {
		bare.routeUpgrade(req, socket, head);
	} else {
		socket.end();
	}
});

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile("/public/index.html", { root: __dirname });
});

app.get("/s/", (req, res) => {
  res.sendFile("/public/settings.html", { root: __dirname });
});

app.get("/w/", (req, res) => {
  res.sendFile("/public/browser.html", { root: __dirname });
});

app.get("/b/", (req, res) => {
  res.sendFile("/public/browser.html", { root: __dirname });
});

app.get("/c/", (req, res) => {
  res.sendFile("/public/ag.html", { root: __dirname });
});

app.get("/a/", (req, res) => {
  res.sendFile("/public/algebra.html", { root: __dirname });
});

app.get("/q/", (req, res) => {
  res.sendFile("/public/g.html", { root: __dirname });
});

var sg = [];
var sa = [];
function getrand() {
  sg.splice(0, sg.length);
  for (var i = 0; i < 8; i++) {
    var rg = g.length;
    var random = Math.floor(Math.random() * rg);
    if (!sg.includes(g[random])) {
      sg.push(g[random]);
    } else {
      i--;
    }
  }
};
function getrandapps() {
  sa.splice(0, sa.length);
  for (var i = 0; i < 8; i++) {
    var ra = a.length;
    var random = Math.floor(Math.random() * ra);
    if (!sa.includes(a[random])) {
      sa.push(a[random]);
    } else {
      i--;
    }
  }
};
setInterval(getrand, 500000);
setInterval(getrandapps, 500000);
getrand();
getrandapps();

app.get("/api/g/v1/", (req, res) => {
  res.json(g)
});

app.get('/api/rg/v1/', (req, res) => {
res.json(sg)
});

app.get('/api/a/v1/', (req, res) => {
  res.json(a)
});

app.get('/api/ra/v1/', (req, res) => {
res.json(sa)
});

server.listen(PORT);

server.on("listening", () => {
  console.log("Ghost Is On http://localhost:" + PORT);
});

server.on("SIGTERM", () => {
  debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    debug("HTTP server closed");
  });
});

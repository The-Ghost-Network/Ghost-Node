//import skid from "skid-server-node";
import wisp from "wisp-server-node";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import { createBareServer } from "@tomphttp/bare-server-node";
import http from "node:http";
import express from "express"
import  g  from "./server_lib/games.mjs" // i finaly did the thing
import  a  from "./server_lib/apps.mjs"

//guys remember to join us next time for scramming our jets!!! rammerhead included!!!
const bare = createBareServer("/bare/");
const server = http.createServer();
const PORT = 8080;
const app = express(); 
const __dirname = process.cwd();
 //meow 

//https://en.wikipedia.org/wiki/Epoxy
app.use("/epox/", express.static(epoxyPath));
//https://en.wikipedia.org/wiki/Bear
app.use("/bearux/", express.static(baremuxPath));

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
      wisp.routeRequest(req, socket, head);
  }
});

//weird suttfff!!! weird!!!!!

app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
  res.sendFile("/public/index.html", { root: __dirname });
});

//meow
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
// all ghost apis

app.get("/api/links/v1/", (req, res) => { //if you want to add links back do it here 
  res.json(["api-depricated"]);
});

app.get("/api/info/v1/", (req, res) => { // for this weird scuffed panel im gonna make
  res.json([{
    "Version": '2.4', 
    // TODO - Online / offline things
  }])
});

var sg = [];
var sa = [];
//32 games added
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
}

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
}

//reget apps and games every 5 minutes
setInterval(getrand, 500000);
setInterval(getrandapps, 500000);
//run the function 1 time to start then let the interval rerun it
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

// SIGMA SHUTDOWN
server.on("SIGTERM", () => {
  debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    debug("HTTP server closed");
  });
});

//get out of here you skiddddd
import wisp from "wisp-server-node";
import { epoxyPath } from "@mercuryworkshop/epoxy-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import express from "express";
import { createBareServer } from "@tomphttp/bare-server-node";
import http from "node:http";

//default port is 8080 for some reason
const PORT = 8080;
const app = express();
const __dirname = process.cwd();
const server = http.createServer();
const bare = createBareServer("/bare/");

//https://en.wikipedia.org/wiki/Epoxy
app.use("/epox/", express.static(epoxyPath));
//https://en.wikipedia.org/wiki/Bear
app.use("/bearux/", express.static(baremuxPath));

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
      wisp.routeRequest(req, socket, head);
  }
});

app.use(express.static(__dirname + "/public"));


//paths i think
app.get("/", (req, res) => {
  res.sendFile("/public/index.html", { root: __dirname });
});

//meow
app.get("/s/", (req, res) => {
  res.sendFile("/public/settings.html", { root: __dirname });
});

app.get("/l/", (req, res) => {
  res.sendFile("/public/l.html", { root: __dirname });
});

app.get("/w/", (req, res) => {
  res.sendFile("/public/browser.html", { root: __dirname });
});

app.get("/b/", (req, res) => {
  res.sendFile("/public/blocked.html", { root: __dirname });
});

app.get("/c/", (req, res) => {
  res.sendFile("/public/school/", { root: __dirname });
});

app.get("/a/", (req, res) => {
  res.sendFile("/public/algebra.html", { root: __dirname });
});

app.get("/q/", (req, res) => {
  res.sendFile("/public/g.html", { root: __dirname });
});


// all ghost apis

app.get("/api/links/v1/", (req, res) => {
  res.send(`
      let links = [
      https://mathiscool.global.ssl.fastly.net,
      https://meow.newpowergroup.com/,
      https://iswearitsnotghost.glitchnetwork.xyz/,
      https://free.fontovacorredora.cl,
      https://htmlcoding.cachingtech.com/,
      ]
    `)
});


//404 Proxo not found
app.get('*', function(req, res){
  res.sendFile("/public/404.html", { root: __dirname });
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

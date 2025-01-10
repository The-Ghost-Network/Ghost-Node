
import { createBareServer } from "@tomphttp/bare-server-node";
import http from "node:http";
import express from "express"
import  g  from "./server_lib/games.mjs"
import  a  from "./server_lib/apps.mjs"
import deg from "./server_lib/deg.mjs";
import fetch from "node-fetch";

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

app.get("/tools/", (req, res) => {
  res.sendFile("/public/tools.html", { root: __dirname });
});

app.get("/dl/", (req, res) => {
  res.sendFile("/public/dl.html", { root: __dirname });
});

app.get("/check/", (req, res) => {
  res.sendFile("/public/check.html", { root: __dirname });
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

//forward the api req to lightspeed
//if your in here then you are either a skid or just wondering how this works 
//either way get out :3
app.get("/api/fl/lightspeed/v1/", (req, res) => {
  const url = req.query.url;
  fetch(
    "https://production-archive-proxy-api.lightspeedsystems.com/archiveproxy",
    {
      method: "POST",
      body: JSON.stringify({
        query:
          "query getDeviceCategorization($itemA: CustomHostLookupInput!, $itemB: CustomHostLookupInput!){ a: custom_HostLookup(item: $itemA) {cat}  b: custom_HostLookup(item: $itemB) {cat}}",
        variables: {
          itemA: { hostname: url },
          itemB: { hostname: url },
        },
      }),
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "onEkoztnFpTi3VG7XQEq6skQWN3aFm3h",
      },
    },
  )
    .then((response) => {
      if (!response.ok) {
        return res.json(["Error"]);
      }
      return response.json();
    })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(["Error", error]);
    });
});


//fortigaurd
app.get("/api/fl/fortigaurd/v1/", async (req, res) => {
  const url = req.query.url;
  let r = await fetch("https://www.fortiguard.com/learnmore/dns",
    {
      method: "POST",
      body: JSON.stringify({
          "value": url,
          "version": 9
      }),
      headers: {
      "Content-Type": "application/json",
      "Accept": "*/*"
      }
    },
  )
  let data = await r.json()
      res.json(data);
});

//blocksi
app.get("/api/fl/blocksi/v1/", async (req, res) => {
const url = req.query.url;
let r = await fetch(`https://service1.blocksi.net/getRating.json?url=${url}`)
let d = await r.json() 
res.json(d)
});

//palo alto
app.get("/api/fl/paloalto/v1/", async (req, res) => {
  const url = req.query.url;
  let r = await fetch(`https://urlfiltering.paloaltonetworks.com/single_cr/?url=${url}`)
  let data = await r.text()
  //janky weird way of parsing it
  let cutstr = data.substring(data.indexOf("<label class=\"control-label col-sm-2 col-lg-2 \" for=\"id_new_category\">Current Risk Level</label>") + 1, data.lastIndexOf("<!-- New Dropdown -->")).replace("label class=\"control-label col-sm-2 col-lg-2 \" for=\"id_new_category\">Current Risk Level</label>\n                        <div class=\" col-sm-10 col-lg-10 form-text\">\n                            \n    ", "")
  let thestr = cutstr.replace("\n                            \n                        </div>\n                    </div>\n                \n                <div class=\"form-group\">\n                    <label class=\"control-label col-sm-2 col-lg-2 \" for=\"id_new_category\">Current Category</label>\n                    <div class=\" col-sm-10 col-lg-10 form-text\">\n                        \n                             \n       ", "|")
  let str = thestr.replace("\n                            \n                        \n                        \n                    </div>\n                </div>", "|")
  let resp = str.replace(/\s/g, '')
  res.json(`{"risk": "${resp.split('|')[0]}", "e": {"categoryname": "${resp.split('|')[1]}"}}`);
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

app.get("/api/deg/v1/", (req, res) => {
  res.json(deg)
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
  console.log("Ghost Is On http://localhost:" + PORT + ":3");
});

server.on("SIGTERM", () => {
  debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    debug("HTTP server closed");
  });
});

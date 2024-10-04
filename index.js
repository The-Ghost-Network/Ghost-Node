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
  res.json([

        "https://mathiscool.global.ssl.fastly.net",
        "https://meow.newpowergroup.com/",
        "https://iswearitsnotghost.glitchnetwork.xyz",
        "https://free.fontovacorredora.cl",
        "https://htmlcoding.cachingtech.com",
     ]   
  )
}
)
app.get("/api/g/v1/", (req, res) => {
  res.json([
    [
      {
        "name": "1v1.LOL",
        "img": "/school/assets/1v1.png",
        "href": "https://1v1.lol"
      },
      {
        "name": "Drivemad",
        "img": "/school/assets/drivemad.png",
        "href": "https://g.immortal2willlose.xyz/ghost/drive-mad/index.html"
      },
      {
        "name": "Minecraft 1.5",
        "img": "/school/assets/minecraft.png",
        "href": "https://g.immortal2willlose.xyz/ghost/minecraft-15/"
      },
      {
        "name": "Minecraft 1.8",
        "img": "/school/assets/minecraft.png",
        "href": "https://g.immortal2willlose.xyz/ghost/minecraft-18/"
      },
      {
        "name": "Just One Boss",
        "img": "/school/assets/justoneboss.png",
        "href": "https://g.immortal2willlose.xyz/ghost/justoneboss/web/"
      },
      {
        "name": "Phisibox",
        "img": "/school/assets/physibox.png",
        "href": "https://g.immortal2willlose.xyz/ghost/phisibox/"
      },
      {
        "name": "Bitlife",
        "img": "/school/assets/bitlife.png",
        "href": "https://g.immortal2willlose.xyz/ghost/bitlife/"
      },
      {
        "name": "Monkey mart",
        "img": "/school/assets/monkeymart.png",
        "href": "https://g.immortal2willlose.xyz/ghost/MonkeyMart/"
      },
      {
        "name": "Motox3m",
        "img": "/school/assets/motox3m.png",
        "href": "https://g.immortal2willlose.xyz/ghost/motox3m/"
      },
      {
        "name": "Motox3m2",
        "img": "/school/assets/motox3m2.png",
        "href": "https://g.immortal2willlose.xyz/ghost/motox3m2"
      },
      {
        "name": "Stickman-hook",
        "img": "/school/assets/stickmanhook.png",
        "href": "https://g.immortal2willlose.xyz/ghost/stickman-hook/"
      },
      {
        "name": "Achivement Unlocked",
        "img": "/school/assets/achievementunlocked.png",
        "href": "https://g.immortal2willlose.xyz/ghost/achivementunlocked/"
      },
      {
        "name": "Amoung us",
        "img": "/school/assets/amongus.png",
        "href": "https://g.immortal2willlose.xyz/ghost/among-us"
      },
      {
        "name": "Cut the Rope",
        "img": "/school/assets/cutrope.png",
        "href": "https://g.immortal2willlose.xyz/ghost/ctr/"
      },
      {
        "name": "Doodle Jump",
        "img": "/school/assets/doodle.png",
        "href": "https://g.immortal2willlose.xyz/ghost/doodle-jump/"
      },
      {
        "name": "Ducklife",
        "img": "/school/assets/ducklife.png",
        "href": "https://g.immortal2willlose.xyz/ghost/ducklife1/"
      },
      {
        "name": "Friday Night Funkin",
        "img": "/school/assets/fnf.png",
        "href": "https://g.immortal2willlose.xyz/ghost/fridaynightfunkin/"
      },
      {
        "name": "Happy Wheels",
        "img": "/school/assets/happywheels.png",
        "href": "https://g.immortal2willlose.xyz/ghost/happywheels/"
      },
      {
        "name": "Vex7",
        "img": "/school/assets/vex7.png",
        "href": "https://g.immortal2willlose.xyz/ghost/vex7/"
      },
      {
        "name": "Webretro",
        "img": "/school/assets/retroarch.png",
        "href": "https://g.immortal2willlose.xyz/ghost/webretro/"
      },
      {
        "name": "Hackertype",
        "img": "/school/assets/hackertyper.png",
        "href": "https://g.immortal2willlose.xyz/ghost/hackertype/"
      },
      {
        "name": "Jetpack Joyride",
        "img": "/school/assets/jetpack.png",
        "href": "https://g.immortal2willlose.xyz/ghost/jetpack-joyride/"
      },
      {
        "name": "Lofi radio",
        "img": "/school/assets/lofi.png",
        "href": "https://g.immortal2willlose.xyz/ghost/chill-radio/"
      },
      {
        "name": "Dino",
        "img": "/school/assets/dino.png",
        "href": "https://g.immortal2willlose.xyz/ghost/chrome-dino/"
      },
      {
        "name": "Dogeminer",
        "img": "/school/assets/dogeminer.png",
        "href": "https://g.immortal2willlose.xyz/ghost/Dogeminer/"
      },
      {
        "name": "Dogeminer 2",
        "img": "/school/assets/dogeminer2.png",
        "href": "https://g.immortal2willlose.xyz/ghost/Dogeminer2/"
      },
      {
        "name": "1 On 1 BasketBall",
        "img": "/school/assets/1on1.png",
        "href": "https://basketball-stars.me/g/41"
      },
      {
        "name": "Space Wars",
        "img": "/school/assets/spacewars.png",
        "href": "https://games.crazygames.com/en_US/space-wars-battleground/index.html?v=1.301"
      },
      {
        "name": "1 On 1 Soccer",
        "img": "/school/assets/1o1football.png",
        "href": "https://frivez.com/flashgame?load=1-on-1-soccer"
      },
      {
        "name": "Rainbow Tower",
        "img": "/school/assets/rainbowtower.png",
        "href": "https://www.mathplayground.com/mobile_rainbow_tower/index.html"
      },
      {
        "name": "Shell Shockers",
        "img": "/school/assets/shock.png",
        "href": "https://shellshock.io/"
      },
      {
        "name": "BasketBros",
        "img": "/school/assets/basketbros.png",
        "href": "https://basket-bros.github.io/a7/basket-bros"
      },
      {
        "name": "Slope",
        "img": "/school/assets/slope.png",
        "href": "https://slope.lol/games/slope/index.html"
      },
      {
        "name": "Baldi's Basics",
        "img": "/school/assets/baldi.png",
        "href": "https://healthstudies.commwebworks.com/game/baldi/index.html"
      },
      {
        "name": "Vex 6",
        "img": "/school/assets/vex6.png",
        "href": "https://healthstudies.commwebworks.com/game/vex6/index.html"
      },
      {
        "name": "BasketBall Stars",
        "img": "/school/assets/basketball-stars.png",
        "href": "https://basketball-stars.me/g/41"
      },
      {
        "name": "2048",
        "img": "/school/assets/2048.png",
        "href": "https://play2048.co/"
      },
      {
        "name": "Awesome Tanks",
        "img": "/school/assets/atank.png",
        "href": "https://mountain658.github.io/zawesometanks.html"
      },
      {
        "name": "Super Mario 64",
        "img": "/school/assets/sm64.png",
        "href": "https://supermario64online.github.io/file/"
      },
      {
        "name": "Arcane",
        "img": "/school/assets/arcane.png",
        "href": "https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Farcane.xml&container=ig"
      },
      {
        "name": "8 Ball Pool",
        "img": "/school/assets/8ball.png",
        "href": "https://8ballpoolonline.github.io/file/"
      },
      {
        "name": "Elastic Man",
        "img": "/school/assets/eman.png",
        "href": "https://d21u3ic0kp9e91.cloudfront.net/elasticman/0/index.html"
      },
      {
        "name": "OvO",
        "img": "/school/assets/OvO.png",
        "href": "https://ovoclassic.github.io/file/"
      },
      {
        "name": "OvO 2",
        "img": "/school/assets/OvO2.png",
        "href": "https://dedragames.com/games/ovo2/0.2alpha/"
      },
      {
        "name": "60 Second Burger Run",
        "img": "/school/assets/burger.png",
        "href": "https://jrh94vc33vp28pi1s5tpvk6sru5j6nvg-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%252F60-second-burger-run.xml&container=enterprise&view=default&lang=en&country=AL"
      },
      {
        "name": "TimeShooter",
        "img": "/school/assets/shoot.png",
        "href": "https://gnhustgames.github.io/timeshooter2/"
      },
      {
        "name": "Drift Boss",
        "img": "/school/assets/driftboss.png",
        "href": "https://www.hoodamath.com/mobile/games/drift-boss/game.html?nocheckorient=1"
      },
      {
        "name": "Vex 5",
        "img": "/school/assets/vex5.png",
        "href": "https://html5.gamedistribution.com/f120262ab72743039fbce88c1f370df8/"
      },
      {
        "name": "Retrobowl",
        "img": "/school/assets/retrobowl.png",
        "href": "https://game316009.konggames.com/gamez/0031/6009/live/index.html"
      },
      {
        "name": "Balloons Tower Defence",
        "img": "/school/assets/btd.png",
        "href": "https://bloons-tower-defense.github.io/file/"
      },
      {
        "name": "Angry Birds",
        "img": "/school/assets/angrybirds.png",
        "href": "https://smartcart1.github.io/s88/angry-birds/"
      },
      {
        "name": "Portal",
        "img": "/school/assets/portal.png",
        "href": "https://games.crazygames.com/en_US/portal-2d/index.html"
      },
      {
        "name": "Bob The Builder",
        "img": "/school/assets/bob.png",
        "href": "https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Fbob-the-builder.xml&container=ig"
      },
      {
        "name": "Subway Surfers",
        "img": "/school/assets/subwaysurfers.png",
        "href": "https://szhong.4399.com/4399swf//upload_swf/ftp35/liuxinyu/20210324/jj01/index.html"
      },
      {
        "name": "CSGO clicker",
        "img": "/school/assets/csgo.png",
        "href": "https://mtsl.dk/csgo/"
      },
      {
        "name": "Tag",
        "img": "/school/assets/tag.png",
        "href": "https://abinbins.github.io/a3/tag"
      },
      {
        "name": "Temple Run",
        "img": "/school/assets/trun.png",
        "href": "https://burgerbounty.github.io/s8/temple-run-2"
      },
      { 
        "name": "Jelly Truck",
        "img": "/school/assets/jellytruck.png",
        "href": "https://webglmath.github.io/jelly-truck/"
      },
      { 
        "name": "Stickman Golf",
        "img": "/school/assets/stickmangolf.png",
        "href": "https://www.silvergames.com/en/stickman-golf/gameframe"
      },
      { 
        "name": "There is No Game",
        "img": "/school/assets/thereisnogame.png",
        "href": "https://game258367.konggames.com/gamez/0025/8367/live/index.html"
      },
      {
        "name": "Helix Jump",
        "img": "/school/assets/helixjump.png",
        "href": "https://html5.gamedistribution.com/630d7b91a96145949f86128ce8f1c4eb/?gd_sdk_referrer_url=https://helixjump2.com/helix-jump.embed"
      },
      {
        "name": "Basket Random",
        "img": "/school/assets/basketrandom.png",
        "href": "https://www.twoplayergames.org/embed/basket-random"
      },
      {
        "name": "Pokemon Gold",
        "img": "/school/assets/pokemongold.png",
        "href": "https://static.arcadespot.com/retroemulator.php?system=gbc&game=2016/07/pokemon-gold.zip"
      }, 
      {
        "name": "The Impossible Quiz",
        "img": "/school/assets/impossiblequiz.png",
        "href": "https://23azostore.github.io/s8/the-impossible-quiz"
      },
      {
        "name": "Pokemon Crystal",
        "img": "/school/assets/pokemonecrystal.png",
        "href": "https://static.arcadespot.com/retroemulator.php?system=gbc&game=2016/07/pokemon-gold.zip"
      },
      {
        "name": "Super Mario Run",
        "img": "/school/assets/smrun.png",
        "href": "https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://829627-952743.preview.editmysite.com/uploads/9/9/0/8/139890129/custom_themes/920586287177613906/files/smr.xml&container=ig"
      },
      {
        "name": "Adventure Capitalist",
        "img": "/school/assets/adventure.png",
        "href": "https://than1089.github.io/adventure-capitalist/"
      },
      {
        "name": "Backrooms",
        "img": "/school/assets/backrooms.png",
        "href": "https://backroomsgame.io/game/backrooms/"
      },
      {
        "name": "Funny Shooter",
        "img": "/school/assets/funnyshooter.png",
        "href": "https://funnyshooter.github.io/file/"
      },
      {
        "name": "Bad time simulator",
        "img": "/school/assets/badtimesimulator.png",
        "href": "https://badtimesimulator.io/" 
      },
      {
        "name": "Bob The Robber 2",
        "img": "/school/assets/btr2.png",
        "href": "https://html5.gamedistribution.com/34d6aae0257d4e4c8068cbdfc11a8758/" 
      },
      {
        "name": "Hole.io",
        "img": "/school/assets/holeio.png",
        "href": "https://jmw-v5.pages.dev/english/src/hole-io/"
      },
      {
        "name": "Cookie Clicker",
        "img": "/school/assets/cookie1.jpeg",
        "href": "https://orteil.dashnet.org/cookieclicker/"
      },
      {
        "name": "Infinite Craft",
        "img": "/school/assets/icraft.png",
        "href": "https://neal.fun/infinite-craft/"
      },
      {
        "name": "10 Minutes Till Dawn",
        "img": "/school/assets/10min.png",
        "href": "https://games.crazygames.com/en_US/10-minutes-till-dawn/index.html?v=1.292"
      },
      {
        "name": "Run 3",
        "img": "/school/assets/run3.png",
        "href": "https://player03.com/run/3/beta/"
      },
      {
        "name": "Krunker.io",
        "img": "/school/assets/krunkerio.png",
        "href": "https://krunker.io/"
      },
      {
        "name": "Penalty Kick Online",
        "img": "/school/assets/pkick.png",
        "href": "https://boxing2.github.io/b/penalty-kick-online/"
      },
      {
        "name": "Alien Hominid",
        "img": "/school/assets/alienhominid.png",
        "href": "https://math-lessons.online/_games/alienhominid/"
      },
      {
        "name": "Baloons TD",
        "img": "/school/assets/btd1.png",
        "href": "https://bloons-tower-defense.github.io/file/"
      },
      {
        "name": "Bob The Robber",
        "img": "/school/assets/bobr.png",
        "href": "https://html5.gamedistribution.com/18d28481ea514f3c838f9a5a355fb0f7/"
      },
      {
        "name": "Cell Machine",
        "img": "/school/assets/cellmachine.png",
        "href": "https://static.playunblocked.com/2020/11/cell-machine/"
      },
      {
        "name": "Crossy Road",
        "img": "/school/assets/crossyroad.png",
        "href": "https://boxing2.github.io/b/crossy-road"
      },
      {
        "name": "Cut the rope Holiday",
        "img": "/school/assets/ctrholiday.png",
        "href": "https://sz-games.github.io/Games5/ctr-holiday"
      },
      {
        "name": "Papa's Cupcakearia",
        "img": "/school/assets/papascupcakearia.png",
        "href": "https://www.gameslol.net/data/waflash/index.php?g=109"
      },
      {
        "name": "Hobo 1",
        "img": "/school/assets/hobo1.png",
        "href": "https://games.crazygames.com/en_US/hobo/index.html?v=1.301"
      },
      {
        "name": "Hobo 2",
        "img": "/school/assets/hobo2.png",
        "href": "https://games.crazygames.com/en_US/hobo-2/index.html?v=1.301"
      },
      {
        "name": "Hobo 3",
        "img": "/school/assets/hobo3.png",
        "href": "https://www.gameflare.com/embed/hobo-3-wanted/"
      },
      {
        "name": "Hobo 4",
        "img": "/school/assets/hobo4.png",
        "href": "https://www.gameflare.com/embed/hobo-4/" 
      },
      {
        "name": "Hobo 5",
        "img": "/school/assets/hobo5.png",
        "href": "https://www.gameflare.com/embed/hobo-5-space-brawl/" 
      },
      {
        "name": "Hobo 6",
        "img": "/school/assets/hobo6.png",
        "href": "https://games.crazygames.com/en_US/hobo-6/index.html?v=1.301"
      },
      {
        "name": "Hobo 7",
        "img": "/school/assets/hobo7.png",
        "href": "https://games.crazygames.com/en_US/hobo-7/index.html?v=1.301" 
      }
    ]
    

  ])
})

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

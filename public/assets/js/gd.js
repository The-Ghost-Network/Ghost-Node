//never using prettier on this ever again :sob:
const frame = document.getElementById("frame");
const form = document.getElementById('forminput')
const topbar = document.getElementById('topbar')
const iframe = document.getElementById('frame')
const swAllowedHostnames = ["localhost", "127.0.0.1"];
const stockSW = "/search/sw.js";
localStorage.setItem("nav", "0");
const nav = document.getElementById("topbar");
const navbttn = document.getElementById("navbttn1");
const uvurl = localStorage.getItem("url");
const spanel = document.getElementById('spanel');
const panelbttn = document.getElementById("panelbttn");
const uvpanel = document.getElementById('uvpanel');
const panel2bttn = document.getElementById('pnlbttn');
const UVver = localStorage.getItem('UVver')
let wispUrl =  (location.protocol === "https:" ? "wss" : "ws") +   "://" +   location.host +   "/wisp/";
const url = localStorage.getItem("url");
const input = document.querySelector(".search");
const uvver = localStorage.getItem("UVver");


//set transport and load settings
addEventListener("DOMContentLoaded", async (event) => {
  loadUV();
  frame.src = url;
  setInterval(function() { loadURL() }, 3000);

  //failsafe to prevent invalid urls
  switch(UVver) {
    case "2":
      if(url.includes('/search/')) {
        const replacedurlV2 = url.replace("/search/", "/u/query/");
        localStorage.setItem("url", replacedurlV2);
        frame.src = replacedurlV2;
      }
      break;
      case "3":
        if(url.includes('/u/query/')) {
        const replacedurlV3 = url.replace("/u/query/", "/search/");
        localStorage.setItem("url", replacedurlV3);
        frame.src = replacedurlV3;
        }
        break;
  }


});


    //topbar script
    document.addEventListener("DOMContentLoaded", () => {
    input.addEventListener("keydown", handleInput);
      function handleInput(e) {
if (e.key !== "Enter") return;
if (input.value.includes(blocked)) {
  window.location.replace("/blocked.html");
} else {
  const query = formatSearch(input.value);
  if (uvver === "2") {
    frame.src = "/u/query/" +  btoa(query);
    setformurl();
  } else {
    frame.src = "/search/" +  btoa(query);
    setformurlv3();
  }
}
}

function formatSearch(query) {
const engine = localStorage.getItem("engine");
if (engine === null) {
  localStorage.setItem("engine", "https://www.google.com/search?q=");
}
try {
  return new URL(query).toString();
} catch (e) {}
try {
  const url = new URL(`https://${query}`);
  if (url.hostname.includes(".")) return url.toString();
} catch (e) {}
return new URL(engine + `${query}`).toString();
}
const blocked = [
"porn",
"sex",
"xxx",
"hentai",
"pornhub.com",
"xxx.com",
"4chan.org",
];
});

//set the url in the topbar
function setformurl() {
  frame.contentWindow.window.open = function (url, windowName, windowFeatures) {
    iframe.src = '/u/query/' + __uv$config.encodeUrl(url)
  }
    if(document.activeElement === document.getElementById('forminput')) {
    }else {
const geturl = frame.contentWindow.location.href
const removedUrl = geturl.replace("https://" + location.hostname + "/u/query/", "")
form.value = atob(removedUrl);
localStorage.setItem("url", frame.src); 
    }
}

function setformurlv3() {
  frame.contentWindow.window.open = function (url, windowName, windowFeatures) {
    iframe.src = '/search/' +  __uv$config.encodeUrl(url)
  }
if(document.activeElement === document.getElementById('forminput')) {
}else {
const geturl = frame.contentWindow.location.href
const removedUrl = geturl.replace("https://" + location.hostname + "/search/", "")
form.value = atob(removedUrl);
localStorage.setItem("url", frame.src);
}
}

//load the url
function loadURL() {
    switch(UVver) {
      case "3":
      setformurlv3();
      break;
      case "2": 
      setformurl();
      break;
      case null:
      setformurlv3();
      break;
    }
    }
    //load the version of uv
    async function loadUV() {
        const version = localStorage.getItem("UVver");
        //get the version of Ultraviolet the user selected
        switch (version) {
          case "2":
            var bundle1 = document.createElement("script");
            bundle1.src = "/u/uv.bundle.js";
            var config1 = document.createElement("script");
            config1.src = "/u/uv.config.js";
            document.head.appendChild(config1);
            document.head.appendChild(bundle1);
            await registerSWv2();
            console.log("Loaded Ultraviolet");
            break;
          case "3":
            var bundle2 = document.createElement("script");
            bundle2.src = "/search/uv.bundle.js";
            var config2 = document.createElement("script");
            config2.src = "/search/uv.config.js";
            document.head.appendChild(bundle2);
            document.head.appendChild(config2);
            await registerSW();
            await connection.setTransport("/epox/index.mjs", [
              { wisp: wispUrl },
            ]);
            console.log("Loaded Ultraviolet");
            break;
          case null:
            var bundle1 = document.createElement("script");
            bundle1.src = "/u/uv.bundle.js";
            var config1 = document.createElement("script");
            config1.src = "/u/uv.config.js";
            document.head.appendChild(config1);
            document.head.appendChild(bundle1);
            localStorage.setItem("UVver", "2");
            await registerSWv2();
            console.log("Loaded Ultraviolet");
        }
      }
      

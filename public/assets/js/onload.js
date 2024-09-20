//Define it
const close = localStorage.getItem("leave");
const key = localStorage.getItem("key");
const icon = localStorage.getItem("icon");
const favicon = document.getElementById("favicon");
const clickoff1 = localStorage.getItem("clickoff");
const theme = localStorage.getItem("theme");
const leave = localStorage.getItem("leave");
const blanke = localStorage.getItem("abt");
const firstLoad = localStorage.getItem('firstLoad')

addEventListener("DOMContentLoaded", async (event) => {
  initTheme();
  //deregister the current v3 sw if they used the website before and register the v2 sw for site support
  if(firstLoad === null) {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const registration of registrations) {
        registration.unregister();
        localStorage.setItem("swregistered", "");
      }
    });
    localStorage.setItem('UVver', '2')
  }else {
    }

    localStorage.setItem('firstLoad', 'false')

  //switches
  switch (blanke) {
    case "on":
      blank();
      break;
    case "off":
      break;
  }

  switch (icon) {
    case "docs":
      favicon.href = "/assets/img/docs.png";
      document.title = "Google Docs";
      break;
    case "drive":
      favicon.href = "/assets/img/drive.png";
      document.title = "Google Drive";
      break;
    case "desmos":
      favicon.href = "/assets/img/desmos.png";
      document.title = "Desmos";
      break;
    case "canvas":
      favicon.href = "/assets/img/canvas.png";
      document.title = "Canvas";
      break;
    case "classroom":
      favicon.href = "/assets/img/classroom.png";
      document.title = "Google Classroom";
      break;
  }

  localStorage.setItem("currenttitle", document.title);
  localStorage.setItem("currentfavicon", favicon.href);

  switch (leave) {
    case "on":
      window.onbeforeunload = function () {
        return true;
      };
      break;
    case "off":
      break;
  }

  //ifs
  if (clickoff1 === "on") {

    document.addEventListener("visibilitychange", (e) => {
      if (document.visibilityState === "visible") {
        const currenttitle = localStorage.getItem("currenttitle");
        const currentfavicon = localStorage.getItem("currentfavicon");

        document.title = currenttitle;
        favicon.href = currentfavicon;
      } else {
        document.title = "Google Docs";
        favicon.href = "/assets/img/docs.png";
      }
    });
  }

  if (close === "on") {
    window.onbeforeunload = function () {
      return true;
    };
  } else {
    console.log(`Anti Close Disabled!`);
  }
  if (key === null) {
    localStorage.setItem("key", "`");
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === key) {
      top.location.replace("https://www.google.com");
    }
  });

  if (blanke === null) {
    localStorage.setItem("abt", "off");
  }

  if (clickoff1 === null) {
    localStorage.setItem("clickoff", "off");
  }

  if (close === null) {
    localStorage.setItem("leave", "off");
  }
});

//functions
function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.setAttribute("class", savedTheme);
  }
}

function blank() {
  var currentUrl = top.location.href;
  if (currentUrl === "about:blank") {
    console.log(currentUrl);
  } else {
    var url = "/";
    var win = window.open();
    var iframe = win.document.createElement("iframe");
    top.location.replace("https://google.com");
    iframe.style.position = "fixed";
    iframe.style.top = 0;
    iframe.style.bottom = 0;
    iframe.style.left = 0;
    iframe.style.right = 0;
    iframe.style.border = "none";
    iframe.style.outline = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.src = url;

    win.document.body.appendChild(iframe);
  }
}

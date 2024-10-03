function clickoff() {
  const local = localStorage.getItem("clickoff");
  switch (local) {
    case "off":
      localStorage.setItem("clickoff", "on");
      break;
    case "on":
      localStorage.setItem("clickoff", "off");
      break;
    case null:
      localStorage.setItem("clickoff", "on");
      break;
  }
  location.href = "/";
}

function tabs() {
  const tabslocal = localStorage.getItem("tabs");
  switch (tabslocal) {
    case "off":
      localStorage.setItem("tabs", "on");
      break;
    case "on":
      localStorage.setItem("tabs", "off");
      break;
  }
  location.href = "/";
}

function clickoff() {
  const clickofff = localStorage.getItem("clickoff");

  switch (clickofff) {
    case "off":
      localStorage.setItem("clickoff", "on");
      location.href = "/";
      break;
    case "on":
      localStorage.setItem("clickoff", "off");
      location.href = "/";
      break;
  }
}

function noleave() {
  const leave = localStorage.getItem("leave");

  switch (leave) {
    case "off":
      localStorage.setItem("leave", "on");
      break;
    case "on":
      localStorage.setItem("leave", "off");
      break;
    case null:
      localStorage.setItem("leave", "on");
      break;
  }
  location.href = "/";
}

function icondocs() {
  const favicon = document.getElementById("favicon");
  favicon.href = "/assets/img/docs.png";
  localStorage.setItem("icon", "docs");
  document.title = "Docs";
}

function icondrive() {
  const favicon = document.getElementById("favicon");
  favicon.href = "/assets/img/drive.png";
  localStorage.setItem("icon", "drive");
  document.title = "Drive";
}

function icondesmos() {
  const favicon = document.getElementById("favicon");
  favicon.href = "/assets/img/desmos.png";
  localStorage.setItem("icon", "desmos");
  document.title = "Desmos";
}

function iconcanvas() {
  const favicon = document.getElementById("favicon");
  favicon.href = "/assets/img/canvas.png";
  localStorage.setItem("icon", "canvas");
  document.title = "Canvas";
}

function iconclass() {
  const favicon = document.getElementById("favicon");
  favicon.href = "/assets/img/classroom.png";
  localStorage.setItem("icon", "classroom");
  document.title = "Classes";
}

function recordkey() {
  function handleKeyDown(event) {
    console.log(
      "this is that key you pressed i think dont quote me on that",
      event.key,
    );
    localStorage.setItem("key", event.key);
    document.removeEventListener("keydown", handleKeyDown);
  }
  document.addEventListener("keydown", handleKeyDown);
}

document.addEventListener("DOMContentLoaded", async () => {
  const engine = document.getElementById("engineSWITCHER");
  const currentengine = localStorage.getItem("engine");
  engine.value = currentengine;

  engine.addEventListener("change", (event) => {
    const selectedValue = event.target.value;
    localStorage.setItem("engine", selectedValue);
  });
});

function theme1() {
  localStorage.setItem("theme", "catp");
  document.body.setAttribute("class", "catp");
}
function theme2() {
  localStorage.setItem("theme", "ghost");
  document.body.setAttribute("class", "");
}
function theme4() {
  localStorage.setItem("theme", "pink");
  document.body.setAttribute("class", "pink");
}
function theme5() {
  localStorage.setItem("theme", "blue");
  document.body.setAttribute("class", "blue");
}
function theme6() {
  localStorage.setItem("theme", "green");
  document.body.setAttribute("class", "green");
}
function theme7() {
  localStorage.setItem("theme", "greendark");
  document.body.setAttribute("class", "greendark");
}
function theme8() {
  localStorage.setItem("theme", "pinkdark");
  document.body.setAttribute("class", "pinkdark");
}
function theme9() {
  localStorage.setItem("theme", "bluedark");
  document.body.setAttribute("class", "bluedark");
}
function theme10() {
  localStorage.setItem("theme", "purple");
  document.body.setAttribute("class", "purple");
}
function tabs() {}

function abt() {
  const abtt = localStorage.getItem("abt");
  if (abtt === "off") {
    localStorage.setItem("abt", "on");
    alert("Please Allow Popups And Redirects When the Page Loads :D");
    location.href = "/";
  } else {
    localStorage.setItem("abt", "off");
    location.href = "/";
  }
}

addEventListener("DOMContentLoaded", (event) => {
  const switch1 = document.getElementById("eruda");
  const switch2 = document.getElementById("clickoff");
  const switch3 = document.getElementById("abt");
  const switch4 = document.getElementById("close");
  const cli = localStorage.getItem("clickoff");
  const a = localStorage.getItem("abt");
  const cla = localStorage.getItem("leave");

  switch (er) {
    case "on":
      switch1.checked = "true";
      break;
    case "off":
      break;
  }

  switch (cli) {
    case "on":
      switch2.checked = "true";
      break;
    case "off":
      break;
  }

  switch (a) {
    case "on":
      switch3.checked = "true";
      break;
    case "off":
      break;
  }

  switch (cla) {
    case "on":
      switch4.checked = "true";
      break;
    case "off":
      break;
  }
});

//Meow :3


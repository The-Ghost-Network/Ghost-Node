//nobodyacres is a skiddy kid af

const clickoff1 = localStorage.getItem('clickoff')
const favicon = document.getElementById("favicon"); 

if (clickoff1 === 'true') {
//clipped telling me to go to bed again lol
document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState == "visible") {
      console.log("Tab is active")
      document.title = "Ghost";
      favicon.setAttribute("href", "/assets/img/Ghost.png");  
      console.log("Disabling")
    } else {
      console.log("tab is inactive")
      document.title = "Google Docs";
      favicon.setAttribute("href", "/assets/img/docs.png");  
      console.log("Enabling!")
    }
  });
}
else {
    console.log("Tab ClickOff Disabled!")
    console.log("No further action needed!")
}
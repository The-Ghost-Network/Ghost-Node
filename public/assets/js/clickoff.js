
const clickoff1 = localStorage.getItem('clickoff')
const favicon = document.getElementById("favicon"); 

if (clickoff1 === 'true') {
//clipped telling me to go to bed again lol
document.addEventListener("visibilitychange", (event) => {
    if (document.visibilityState == "visible") {
      document.title = "Ghost";
      favicon.setAttribute("href", "/assets/img/Ghost.png");  
    } else {
      document.title = "Google Docs";
      favicon.setAttribute("href", "/assets/img/docs.png");  
    }
  });
}
else {
}
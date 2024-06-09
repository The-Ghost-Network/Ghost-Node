
//NOOOOO
addEventListener("DOMContentLoaded", (event) => {
  const blanky = localStorage.getItem('blanker');
  if (blanky === 'on') {

    if (top.location.href === 'about:blank') {
      console.log("In About:blank! Disabling the Cloaker!");
    } 

    else {
        //blanket
var win = window.open('about:blank', '_blank');
const url = '/'
  console.log(`opening...`)
  var iframe = win.document.createElement('iframe');
  iframe.style.position = "fixed";
  iframe.style.top = "0";
  iframe.style.left = "0";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.style.outline = "none";
  iframe.src = url;
  win.document.body.appendChild(iframe);

  top.location.replace("https://www.google.com/search?q=how+to+find+ghosts&rlz=1C1JSBI_enUS1089US1090&oq=how+to+find+ghosts&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCDM3NzRqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8")

      if (!win || win.closed) {
        alert("Please Allow Popups And Redirects so that blanky :D");
      }
      }}

   else {
    console.log(`Blanker Disabled!`);
    console.log(`No Further Action Needed.`);
   }}
);

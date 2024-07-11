const stockSW = "/uv/sw.js";
const swAllowedHostnames = ["localhost", "127.0.0.1"];
const close = localStorage.getItem('leave')
const key = localStorage.getItem('key')
const icon = localStorage.getItem('icon')
const favicon = document.getElementById('favicon')
const clickoff1 = localStorage.getItem('clickoff')
const theme = localStorage.getItem('theme');
//set the title
addEventListener("DOMContentLoaded", async (event) => {
    await registerSW();
    initTheme();

    if(theme === null) {
    localStorage.setItem('theme', 'ghost')
    } 

    switch(icon){
        case 'docs':
        favicon.href = '/assets/img/docs.png'
        document.title = "Google Docs";
        break;
        case 'drive':
        favicon.href = '/assets/img/drive.png' 
        document.title = "Google Drive";
        break;
        case 'desmos':
        favicon.href = '/assets/img/desmos.png'
        document.title = "Desmos";
        break;
        case 'canvas':
        favicon.href = '/assets/img/canvas.png'
        document.title = "Canvas";
        break;
        case 'classroom':
        favicon.href = '/assets/img/classroom.png'
        document.title = "Google Classroom";
        break;
    }

    if(clickoff1 === 'true') {
        document.addEventListener('visibilitychange', e=>{
            if (document.visibilityState === 'visible') {
                document.title = title
                favicon.href = '/assets/img/ghost.png'
           } else {
                document.title = 'Google Docs'
                favicon.href = '/assets/img/docs.png'
           }  
       })
    }
    if (close === 'on' ) {
        window.onbeforeunload = function() {
            return true;
        }
    } else {
            console.log(`Anti Close Disabled!`)
        }
    if (key === null) {
        localStorage.setItem('key', '`')
    }
    document.addEventListener('keydown', function(event) {
        if (event.key === key) {
            top.location.replace("https://www.google.com")
            console.log(`Key PRESSED RUN URN RUN`)
        }
      })
            });

        function initTheme() {
            const savedTheme = localStorage.getItem('theme');
                if (savedTheme) {
                    document.body.setAttribute('data-theme', savedTheme);
                  }
                  if(savedTheme === 'green') {
                    document.body.style.backgroundColor =  '#49d533;';
                    document.body.setAttribute('data-theme', savedTheme);
                  }
                 }

            async function registerSW() {
                if (!navigator.serviceWorker) {
                if (
                  location.protocol !== "https:" &&
                  !swAllowedHostnames.includes(location.hostname)
                )
                  throw new Error("Service workers cannot be registered without https.");
                
                throw new Error("Your browser doesn't support service workers.");
                }
                
                await navigator.serviceWorker.register(stockSW);
                }

                function blank() {
                    var win = window.open()
                    var url = "/"
                    var iframe = win.document.createElement('iframe')
                    top.location.replace("https://www.google.com/search?q=how+to+find+ghosts")
                    iframe.style.position = "fixed";
                    iframe.style.top = 0;
                    iframe.style.bottom = 0;
                    iframe.style.left = 0;
                    iframe.style.right = 0;
                    iframe.style.border  = "none"
                    iframe.style.outline = "none";
                    iframe.style.width = "100%"
                    iframe.style.height = "100%";
                    iframe.src = url
                
                    win.document.body.appendChild(iframe)
                }

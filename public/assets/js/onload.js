
//set the title
addEventListener("DOMContentLoaded", (event) => {
    document.addEventListener("visibilitychange", (event) => {
        if (document.visibilityState == "visible") {
const title = localStorage.getItem('title');
document.title = title;
        }
    else {

    }
});
function changeicon(){
    const icon = localStorage.getItem('icon')

    if (icon === 'docs') {
        const favicon = document.getElementById("favicon"); 
        favicon.setAttribute("href", "/assets/img/docs.png");
    }

    if (icon === 'drive') {
        const favicon = document.getElementById("favicon"); 
        favicon.setAttribute("href", "/assets/img/drive.png");
    }

    if (icon === 'desmos') {
        const favicon = document.getElementById("favicon"); 
        favicon.setAttribute("href", "/assets/img/desmos.png");
    }

    if (icon === 'canvas') {
        const favicon = document.getElementById("favicon"); 
        favicon.setAttribute("href", "/assets/img/canvas.png");
    }

    if (icon === 'classroom') {
        const favicon = document.getElementById("favicon"); 
        favicon.setAttribute("href", "/assets/img/classroom.png");
    }

    else {
    }
}
setInterval(function() {
        if (document.visibilityState == "visible") {

    let title = localStorage.getItem('title')
    if (title === null) {
        document.title = 'Ghost';
        localStorage.setItem('title', 'Ghost')
    }
    else {
        document.title = title;
    }
    changeicon()
} 
else {
    console.log(`no`)
}
 }, 2000); });
//themes
            // nobodycares is a skiddy kid af LOL
            function initTheme() {
                const savedTheme = localStorage.getItem('themeSwitch');
                if (savedTheme) {
                    document.body.setAttribute('data-theme', savedTheme);
                }
            }
            initTheme()
            
            setInterval(function() {
                initTheme()
         }, 2000);

            //anti close
            addEventListener("DOMContentLoaded", (event) => {
            const close = localStorage.getItem('leave')

            if (close === 'on' ) {
                console.log(`Anti Close Enabled`)
                window.onbeforeunload = function() {
                    return true;
                }
            }
                else {
                    console.log(`Anti Close Disabled!`)
                    console.log(`No Further Action Needed`)
                }
            });

            addEventListener("DOMContentLoaded", (event) => {
                const key = localStorage.getItem('key')

                if (key === null) {
                    localStorage.setItem('key', '`')
                }
                document.addEventListener('keydown', function(event) {
                    if (event.key === key) {
                        top.location.replace("https://www.google.com")
                        console.log(`Key PRESSED RUN URN RUN`)
                    }
                  });
            });

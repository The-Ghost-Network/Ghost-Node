function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'catppuccinma' ? 'light' : 'catppuccinma';

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('themeSwitch', newTheme);
}

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', toggleTheme);

initTheme();


function toggleThemeGhost() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'ghost' ? 'ghost' : 'ghost';

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('themeSwitch', newTheme);
}

const themeToggleGhost = document.getElementById('themeToggle');
themeToggleGhost.addEventListener('click', toggleTheme);

initTheme();

function toggleThemeGreen() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'green' ? 'green' : 'green';

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('themeSwitch', newTheme);
}

const themeToggleGreen = document.getElementById('themeToggle');
themeToggleGhost.addEventListener('click', toggleTheme);

initTheme();

function toggleThemeRed() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'red' ? 'red' : 'red';

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('themeSwitch', newTheme);
}

const toggleorange = document.getElementById('themeToggle');
themeToggleGhost.addEventListener('click', toggleTheme);

initTheme();

function toggleThemeBlue() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'blue' ? 'blue' : 'blue';

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('themeSwitch', newTheme);
}

const toggleblue = document.getElementById('themeToggle');
themeToggleGhost.addEventListener('click', toggleTheme);

initTheme();

function toggleThemeLight() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'white' ? 'white' : 'white';

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('themeSwitch', newTheme);
}

const togglelight = document.getElementById('themeToggle');
themeToggleGhost.addEventListener('click', toggleTheme);

initTheme();

function updatetitle() {
    let titleform = document.getElementById("titleform");
    let title = titleform.value;
    document.title = title;
     localStorage.setItem("title", title)
   }

   function clickoff() {
    const local = localStorage.getItem("clickoff")

    if (local == on) {
        localStorage.setItem("clickoff", "off")
    }
    if (local == off) {
        localStorage.setItem("clickoff", "on")
    }
   }

   $(document).ready(function() {
    $('.switch input[type="checkbox"]').prop('checked', true);
  });


   function tabs() {
    const tabslocal = localStorage.getItem('tabs')

    if (tabslocal === 'on'){
        localStorage.setItem('tabs', 'off')
    }
    else {
        localStorage.setItem('tabs', 'on')
    }
   }

   function clickoff() {
    const clickofff = localStorage.getItem('clickoff')

    if (clickofff === 'true') {
        localStorage.setItem('clickoff', 'false')
        console.log("Clickoff Cloaking Off!")
    }
    else {
        localStorage.setItem('clickoff' , 'true')
        console.log("Clickoff Cloaking On!")
    }
   }

   function noleave() {
    const leave = localStorage.getItem('leave')

    if (leave === 'on') {
        localStorage.setItem('leave', 'off')
    }

    else {
        localStorage.setItem('leave', 'on')
    }
   }
   
   function abt() {
    var blanky = localStorage.getItem('blanker')

    if (blanky === 'on') {
        localStorage.setItem('blanker', 'off')
    }
    else {
        localStorage.setItem('blanker', 'on')
        console.log(`BLANKYY :OOOOOOOO`)
    }
   }

   function icondocs() {
    const favicon = document.getElementById("favicon"); 
    favicon.setAttribute("href", "/assets/img/docs.png");
    localStorage.setItem('icon', 'docs')
   }

   function icondrive() {
    const favicon = document.getElementById("favicon"); 
    favicon.setAttribute("href", "/assets/img/drive.png");
    localStorage.setItem('icon', 'drive')
   }

   function icondesmos() {
    const favicon = document.getElementById("favicon"); 
    favicon.setAttribute("href", "/assets/img/desmos.png");
    localStorage.setItem('icon', 'desmos')
   }

   function iconcanvas() {
    const favicon = document.getElementById("favicon"); 
    favicon.setAttribute("href", "/assets/img/canvas.png");
    localStorage.setItem('icon', 'canvas')
   }

   function iconclass() {
    const favicon = document.getElementById("favicon"); 
    favicon.setAttribute("href", "/assets/img/classroom.png");
    localStorage.setItem('icon', 'classroom')
   }

   function recordkey() {
    function handleKeyDown(event) {
      console.log('this is that key you pressed i think dont quote me on that', event.key);
      localStorage.setItem('key', event.key);
      document.removeEventListener('keydown', handleKeyDown);
    }
    document.addEventListener('keydown', handleKeyDown);
  }
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

function updatetitle() {
    titleform = document.getElementById("titleform").value;
 
   document.title = titleform;
     localStorage.setItem("title", "titleform.value")
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

   addEventListener("DOMContentLoaded", (event) => {
    const ads = localStorage.getItem("ads")
    const abt = localStorage.getItem("abt")
    const click = localStorage.getItem("clickoff")
    const tabs = localStorage.getItem("tabs")
    const anti = localStorage.getItem
   });

function updatetitle() {
    let titleform = document.getElementById("titleform");
    let title = titleform.value;
    document.title = title;
     localStorage.setItem("title", title)
   }

   function drop() {
    document.getElementById("Dropdown").classList.toggle("show");
}


   function clickoff() {
    const local = localStorage.getItem("clickoff")
    switch (local) {
        case 'off':
            localStorage.setItem("clickoff", "on");
            break;
            case 'on':
            localStorage.setItem("clickoff", "off");
            break;
    }
        location.href = "/"
   }

   function tabs() {
    const tabslocal = localStorage.getItem('tabs')
    switch (tabslocal) {
        case 'off':
            localStorage.setItem("tabs", "on");
            break;
            case 'on':
            localStorage.setItem("tabs", "off");
            break;
    }
    location.href = "/"
   }

   function clickoff() {
    const clickofff = localStorage.getItem('clickoff')

    switch (clickofff) {
        case 'off':
            localStorage.setItem("clickoff", "on");
            location.href = "/"
            break;
            case 'on':
            localStorage.setItem("clickoff", "off");
            location.href = "/"
            break;
    }
   }

   function noleave() {
    const leave = localStorage.getItem('leave')

    switch (leave) {
        case 'off':
            localStorage.setItem("leave", "on");
            location.href = '/'
            break;
            case 'on':
            localStorage.setItem("leave", "off");
            location.href = '/'
            break;
    }
   }

   function icondocs() {
    const favicon = document.getElementById("favicon"); 
    favicon.href = '/assets/img/docs.png'
    localStorage.setItem('icon', 'docs')
    document.title = "Google Docs";
   }

   function icondrive() {
    const favicon = document.getElementById("favicon"); 
      favicon.href = '/assets/img/drive.png'
    localStorage.setItem('icon', 'drive')
    document.title = "Google Drive";
   }

   function icondesmos() {
    const favicon = document.getElementById("favicon"); 
      favicon.href = '/assets/img/desmos.png'
    localStorage.setItem('icon', 'desmos')
    document.title = "Desmos";
   }

   function iconcanvas() {
    const favicon = document.getElementById("favicon"); 
      favicon.href = '/assets/img/canvas.png'
    localStorage.setItem('icon', 'canvas')
    document.title = "Canvas";
   }

   function iconclass() {
    const favicon = document.getElementById("favicon"); 
      favicon.href = '/assets/img/classroom.png'
    localStorage.setItem('icon', 'classroom')
    document.title = "Google Classroom";
   }

   function recordkey() {
    function handleKeyDown(event) {
      console.log('this is that key you pressed i think dont quote me on that', event.key);
      localStorage.setItem('key', event.key);
      document.removeEventListener('keydown', handleKeyDown);
    }
    document.addEventListener('keydown', handleKeyDown);
  }

  document.addEventListener("DOMContentLoaded", async () => {
    const engine = document.getElementById('engineSWITCHER')
    const currentengine = localStorage.getItem('engine')
    engine.value = currentengine;
    
    engine.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        localStorage.setItem('engine', selectedValue);
    });
    
    });

function theme1() {
  localStorage.setItem('theme', 'catppuccinma')
  document.body.setAttribute('data-theme', 'catppuccinma')
}
function theme2() {
  localStorage.setItem('theme', 'ghost')
  document.body.setAttribute('data-theme', 'ghost')
}
function theme4() {
  localStorage.setItem('theme', 'red')
  document.body.setAttribute('data-theme', 'red')
}
function theme5() {
  localStorage.setItem('theme', 'blue')
  document.body.setAttribute('data-theme', 'blue')
}
function theme6() {
  localStorage.setItem('theme', 'green')
  document.body.setAttribute('data-theme', 'green')
}

      function tabs() {
      }

      function abt() {
        const abtt = localStorage.getItem('abt')
        if (abtt === 'off') {
        localStorage.setItem('abt', 'on')
        alert('Please Allow Popups And Redirects When the Page Loads :D')
          location.href = '/'
        }else {
          localStorage.setItem('abt', 'off')
          location.href = '/'
        }
      }
      
      function eruda1() {
        const e = localStorage.getItem('eurda')
        switch(e) {
          case "off":
          localStorage.setItem('eurda', 'on')
          location.href = '/'
          break;
          case "on":
          localStorage.setItem('eurda', 'off')
          location.href = '/'
          break;
        }
      }

      addEventListener("DOMContentLoaded", (event) => {
        const switch1 = document.getElementById('eruda')
        const switch2 = document.getElementById('clickoff')
        const switch3 = document.getElementById('abt')
        const switch4 = document.getElementById('close')
        const er = localStorage.getItem('eurda')
        const cli = localStorage.getItem('clickoff')
        const a = localStorage.getItem('abt')
        const cla = localStorage.getItem('leave')

        switch(er){
          case "on":
          switch1.checked = 'true'
          break;
          case "off":
          break;
        }

        switch(cli) {
          case "on":
          switch2.checked = "true"
          break;
          case "off":
          break;
        }

        switch(a) {
          case "on":
          switch3.checked = "true"
          break;
          case "off":
          break;
        }

        switch(cla) {
          case "on":
          switch4.checked = 'true'
          break;
          case "off":
          break;
        }
      });
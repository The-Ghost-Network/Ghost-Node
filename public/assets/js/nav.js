function createnav() {
  const nav = document.getElementById("nav");

  nav.innerHTML = `
        <div class="container">
        <img onclick="window.location.href='/'" style="width:50px;" src="/school/ghost.png"></img>
        <div class="desc left-margin" style="height: 50px;">
            <p id="uv-error"></p>
            <pre id="uv-error-code"></pre>
        </div>
        <div class="desc left-margin">
        </div>
        <ul class="nav-links">
          <li><a href="/c/" id="school"><i class="fa-solid fa-gamepad active"></i> Games</a></li>
          <li><a href="/a/" id="algebra"><i class="fa-solid fa-phone active"></i> Apps</a></li>
         <li><a href="/s/" id="sett"><i class="fa-solid fa-gear active"></i> Settings</a></li>
         <li><a href="/w/" id="brows"><i class="fa-solid fa-search active"></i> Sea<x>rch</x></a></li>
                 </ul>
    </div>
    `;
}

function createsidenav() {
  const nav = document.getElementById("nav");

  nav.innerHTML = `
    `;
}

function createMobileNav() {
  //make the nav if on mobile
  const nav = document.getElementById("nav");

  nav.innerHTML = `
        <div class="container">
        <img onclick="window.location.href='/'" style="width:50px;" src="/school/ghost.png"></img>
        <ul class="nav-links">
          <li><a href="/c/" id="school"><i class="fa-solid fa-gamepad active"></i></a></li>
          <li><a href="/a/" id="algebra"><i class="fa-solid fa-phone active"></i></a></li>
         <li><a href="/s/" id="sett"><i class="fa-solid fa-gear active"></i></a></li>
         <li><a href="/w/" id="brows"><i class="fa-solid fa-search active"></i></a></li>
                 </ul>
    </div>
    `;

}

function createBottomNav() {
  //use same nav config but set it on the bottom 
  const nav = document.getElementById("nav");

  nav.innerHTML = `
        <div class="container">
        <img onclick="window.location.href='/'" style="width:50px;" src="/school/ghost.png"></img>
        <div class="desc left-margin" style="height: 50px;">
            <p id="uv-error"></p>
            <pre id="uv-error-code"></pre>
        </div>
        <div class="desc left-margin">
        </div>
        <ul class="nav-links">
          <li><a href="/c/" id="school"><i class="fa-solid fa-gamepad active"></i> Games</a></li>
          <li><a href="/a/" id="algebra"><i class="fa-solid fa-phone active"></i> Apps</a></li>
         <li><a href="/s/" id="sett"><i class="fa-solid fa-gear active"></i> Settings</a></li>
         <li><a href="/w/" id="brows"><i class="fa-solid fa-search active"></i> Sea<x>rch</x></a></li>
                 </ul>
    </div>
    `;

    nav.style.bottom = '0'
  
}

addEventListener("DOMContentLoaded", (event) => {
  createnav();

  if(window.innerWidth > 768) {
    createnav();
  }else {
    createMobileNav()
  }
});

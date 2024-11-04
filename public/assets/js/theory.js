function createnav() {
  const nav = document.getElementById("nav");

  nav.innerHTML = `
  <div class="container">
        <img onclick="window.location.href='/'" style="width:50px;" src="/assets/img/ghost.png" class="mainIMG"></img>
        <ul class="nav-links">
          <li><a href="/c/" id="school"><i class="fa-solid fa-gamepad active"></i> Games</a></li>
          <span style="color: var(--Background-Color); opacity: 75%;">|</span>
          <li><a href="/a/" id="algebra"><i class="fas fa-shapes active"></i> Apps</a></li>
          <span style="color: var(--Background-Color); opacity: 75%;">|</span>
         <li><a href="/s/" id="sett"><i class="fa-solid fa-gear active"></i> Settings</a></li>
          <span style="color: var(--Background-Color); opacity: 75%;">|</span>
         <li><a href="/w/" id="brows"><i class="fa-solid fa-search active"></i>Sea<x>rch</a></li>
          <span style="color: var(--Background-Color); opacity: 75%;">|</span>
         <li><a href="https://discord.gg/dbyDXfs5dN" id="brows"><i class="fa-brands fa-discord active" style="margin-right: 5px;"></i></a></li>
         <li><a href="https://github.com/The-Ghost-Network/Ghost-Node" id="brows"><i class="fa-brands fa-github active"></i></x></a></li>
         </div>
                 </ul>
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
          <li><a href="/a/" id="algebra"><i class="fas fa-shapes active"></i></a></li>
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
          <li><a href="/a/" id="algebra"><i class="fas fa-shapes active"></i> Apps</a></li>
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

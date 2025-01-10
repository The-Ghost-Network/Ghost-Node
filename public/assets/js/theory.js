function createnav() {
  const nav = document.getElementById("nav");

  nav.innerHTML = `
<nav class="nav">
    <div class="container">
        <img
            onclick="window.location.href='/'"
            style="width:25px;"
            src="/assets/img/ghost.png"
            class="mainIMG"
        />
            <button>
                <a href="/c/" id="school"
                    ><i class="fa-solid fa-gamepad active"></i></a
                >
            </button>
            <button>
                <a href="/a/" id="algebra"
                    ><i class="fas fa-shapes active"></i></a
                >
            </button>
            <button>
                <a href="/tools/" id="tools"
                    ><i class="fa-solid fa-screwdriver-wrench active"></i></a
                >
            </button>
            <button>
                <a href="/s/" id="sett"
                    ><i class="fa-solid fa-gear active"></i></a
                >
            </button>
            <button>
                <a href="/w/" id="brows"
                    ><i class="fa-solid fa-search active"></i></a
                >
                <button>
                    <a href="https://discord.gg/dbyDXfs5dN" id="brows"
                        ><i
                            class="fa-brands fa-discord active"></i></a
                    >
                </button>
                <button>
                    <a
                        href="https://github.com/The-Ghost-Network/Ghost-Astro"
                        id="brows"><i class="fa-brands fa-github active"></i></a
                    >
                </button>
            </button>
    </div>
</nav>
    `;
}

addEventListener("DOMContentLoaded", (event) => {
  createnav();

  if(window.innerWidth > 768) {
    createnav();
  }else {
    createMobileNav()
  }
});

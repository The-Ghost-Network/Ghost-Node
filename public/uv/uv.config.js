
self.__uv$config = {
    prefix: '/service/',

    /* Bare server URL */ 
    bare: '/bare/',
    
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    client: '/uv/uv.client.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};

const adblocked = [
    "ad",
    "ads",
    "ads.yahoo.com"
]

const blocked = [
    "porn",
    "xxx",
    "hentai",
    "test",
    "p0rn"
]

const injectsites = [
    "now.gg",
    "discord.com"
]

const form = document.getElementById("uv-form")

form.addEventListener("submit", (event) => {});;

onsubmit = (event) => {if (form.includes(blocked)) {
    href="/blocked.html"
}};

const adsblocked = localStorage.getItem.adblocked

if (adsblocked === true) {

}
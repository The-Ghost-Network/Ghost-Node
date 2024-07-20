function bare_switcher(BARE_URL){
    if (BARE_URL == null || BARE_URL == '') { // Set bare to default (dyn) if not set
        __uv$conig.bare = "/bare/"
        localStorage.setItem("BARE_URL", 'def')
        return
    }
    if (BARE_URL === 'static') {
        __uv$conig.bare = "https://muddy-rice-ba72.acsessremote.workers.dev/"
        return
    }
    localStorage.setItem("BARE_URL", BARE_URL)
    __uv$conig.bare = BARE_URL
}
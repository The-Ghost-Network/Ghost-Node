let rgAPI = '/api/rg/v1/'
addEventListener('DOMContentLoaded', async (event) => {
    const gData = await fetch(rgAPI)
        .then((response) => response.text())
        .then((text) => {
            return JSON.parse(text)
        })
    gData.forEach((game) => {
        const i = document.getElementById('trendingg')
        const g = document.createElement('div')
        g.classList.add('g-icon')
        g.setAttribute(
            'onclick',
            "localStorage.setItem('url', '" +
                __uv$config.prefix +
                __uv$config.encodeUrl(game.href) +
                "'); window.location.href = '/q/'"
        )

        const img = document.createElement('button')
        const image = document.createElement('img')
        image.src = game.img

        const gname = document.createElement('p')
        gname.innerText = game.name

        img.appendChild(image)
        g.appendChild(img)
        g.appendChild(gname)
        i.appendChild(g)
    })
})
let raAPI = '/api/ra/v1/'
addEventListener('DOMContentLoaded', async (event) => {
    const gData = await fetch(raAPI)
        .then((response) => response.text())
        .then((text) => {
            return JSON.parse(text)
        })
    gData.forEach((game) => {
        const i = document.getElementById('trendinga')

        const g = document.createElement('div')
        g.classList.add('g-icon')
        g.setAttribute(
            'onclick',
            "localStorage.setItem('url', '" +
                __uv$config.prefix +
                __uv$config.encodeUrl(game.href) +
                "'); window.location.href = '/q/'"
        )

        const img = document.createElement('button')
        const image = document.createElement('img')
        image.src = game.img

        const gname = document.createElement('p')
        gname.innerText = game.name

        img.appendChild(image)
        g.appendChild(img)
        g.appendChild(gname)
        i.appendChild(g)
    })
})
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomLink() {
    let csites = [
        'https://google.com',
        'https://classroom.google.com',
        'https://docs.google.com',
        'https://nasa.gov',
        'https://desmos.com',
        'https://clever.com',
        'https://ixl.com',
    ]
    return csites[getRandomInt(0, csites.length - 1)]
}
function blank() {
    var currentUrl = top.location.href
    if (currentUrl === 'about:blank') {
        console.log(currentUrl)
    } else {
        var win = window.open()
        var url = '/'
        var iframe = win.document.createElement('iframe')
        top.location.replace(getRandomLink())
        iframe.style.position = 'fixed'
        iframe.style.top = 0
        iframe.style.bottom = 0
        iframe.style.left = 0
        iframe.style.right = 0
        iframe.style.border = 'none'
        iframe.style.outline = 'none'
        iframe.style.width = '100%'
        iframe.style.height = '100%'
        iframe.src = url

        win.document.body.appendChild(iframe)
    }
}

function search() {
    window.location.href = '/w/'
}
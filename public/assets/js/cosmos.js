//Define it
const close = localStorage.getItem('leave')
const key = localStorage.getItem('key')
const icon = localStorage.getItem('icon')
const favicon = document.getElementById('favicon')
const clickoff1 = localStorage.getItem('clickoff')
const theme = localStorage.getItem('theme')
const leave = localStorage.getItem('leave')
const blanke = localStorage.getItem('abt')
const themeload = localStorage.getItem('themeload')
const swAllowedHostnames = ['localhost', '127.0.0.1']
const stockSW3 = '/u/sw.js'
const SwRegistered = localStorage.getItem('uvregistered')
//const scramSW = '/scram/sw.js'
const p = localStorage.getItem('p')

addEventListener('DOMContentLoaded', async (event) => {
    initTheme()
    switch (blanke) {
        case 'on':
            blank()
            break
        case 'off':
            break
    }

    if (p === null) {
        localStorage.setItem('p', 'uv')
    }

    switch (icon) {
        case 'docs':
            favicon.href = '/assets/img/docs.png'
            document.title = 'Google Docs'
            break
        case 'drive':
            favicon.href = '/assets/img/drive.png'
            document.title = 'Google Drive'
            break
        case 'desmos':
            favicon.href = '/assets/img/desmos.png'
            document.title = 'Desmos'
            break
        case 'canvas':
            favicon.href = '/assets/img/canvas.png'
            document.title = 'Canvas'
            break
        case 'classroom':
            favicon.href = '/assets/img/classroom.png'
            document.title = 'Google Classroom'
            break
        case null:
            favicon.href = '/assets/img/classroom.png'
            document.title = 'Google Classroom'
            break
    }

    localStorage.setItem('currenttitle', document.title)
    localStorage.setItem('currentfavicon', favicon.href)

    switch (leave) {
        case 'on':
            window.onbeforeunload = function () {
                return true
            }
            break
        case 'off':
            break
    }

    const ads = localStorage.getItem('ads')

    if(!ads) {
      localStorage.setItem("ads", "on")
    }

    switch(ads) {
      case 'on':

      break;
      case 'off':
        document.getElementById('container-d00b3b529c7e75cacbb98e16680c5373').style.display = 'none'
        document.getElementById('ads1').src = '';
        document.getElementById('ads2').src = '';
        console.log('Ads Disabled!')
      break;
    }

    if (SwRegistered === null) {
        console.log('Registering SW')
        unregisterSW()
        localStorage.setItem('uvregistered', 'true')
        localStorage.removeItem('ServiceWorkerRegistered')
        location.reload()
    } else {
    }

    if (clickoff1 === 'on') {
        document.addEventListener('visibilitychange', (e) => {
            if (document.visibilityState === 'visible') {
                const currenttitle = localStorage.getItem('currenttitle')
                const currentfavicon = localStorage.getItem('currentfavicon')

                document.title = currenttitle
                favicon.href = currentfavicon
            } else {
                document.title = 'Google Docs'
                favicon.href = '/assets/img/docs.png'
            }
        })
    }

    if (close === 'on') {
        window.onbeforeunload = function () {
            return true
        }
    } else {
        console.log(`Anti Close Disabled!`)
    }
    if (key === null) {
        localStorage.setItem('key', '`')
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === key) {
            top.location.replace('https://www.google.com')
        }
    })

    if (blanke === null) {
        localStorage.setItem('abt', 'off')
    }

    if (clickoff1 === null) {
        localStorage.setItem('clickoff', 'off')
    }

    if (close === null) {
        localStorage.setItem('leave', 'off')
    }
})

//functions
function initTheme() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
        document.body.setAttribute('class', savedTheme)
    }
}

function blank() {
    var currentUrl = top.location.href
    if (currentUrl === 'about:blank') {
        console.log(currentUrl)
    } else {
        var url = '/'
        var win = window.open()
        var iframe = win.document.createElement('iframe')
        top.location.replace('https://google.com')
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

async function registerSWv2() {
    if (!navigator.serviceWorker) {
        if (
            location.protocol !== 'https:' &&
            !swAllowedHostnames.includes(location.hostname)
        )
            throw new Error(
                'Service workers cannot be registered without https.'
            )

        throw new Error("Your browser doesn't support service workers.")
    }
    await navigator.serviceWorker.register(stockSW3)
}

function unregisterSW() {
    navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (const registration of registrations) {
            registration.unregister()
        }
    })
}
registerSWv2()
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.href !== 'about:blank') {
        console.log("In About:blank! Disabling the Cloaker!")
    }
    else {
        const popup = window.open('about:blank', '_blank');
        if (!popup || popup.closed || typeof popup.closed === 'undefined') {
            alert('WE HAVE A CLOAKER LOL Please Allow Popups And Redirects');
        } else {
            const url = window.location.href;
            const iframe = popup.document.createElement('iframe');
            iframe.src = url;
            style.position = "fixed";
            style.top = style.bottom = style.left = style.right = 0;
            style.border = style.outline = "none";
            style.width = style.height = "100%";
            popup.document.body.appendChild(iframe);

        }
    }
}
);
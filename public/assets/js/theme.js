// nobodycares is a skiddy kid af LOL
addEventListener("DOMContentLoaded", (event) => {
    function initTheme() {
    const savedTheme = localStorage.getItem('themeSwitch');
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
    }
}
initTheme(); });

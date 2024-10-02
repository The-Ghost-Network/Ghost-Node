document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".input");
  input.addEventListener("keydown", handleInput);
  const uvver = localStorage.getItem("UVver");

  function handleInput(e) {
    // We only want the function to run if the key pressed is the Enter key
    if (e.key !== "Enter") return;

    // We Intercept The URL
    // Check if it contains a blocked keyword or website
    if (containsBlockedKeyword(input.value, blocked)) {
      // Redirect to blockpage
      window.location.replace("/blocked.html");
    } else {
      // If it doesn't contain a blocked keyword then proceed
      // Run the formatSearch function on the current value of the input
      const query = formatSearch(input.value);

      if (uvver === "2") {
        localStorage.setItem("url", "/u/query/" + __uv$config.encodeUrl(query));
      } else {
        localStorage.setItem("url", "/search/" + __uv$config.encodeUrl(query));
      }
      // Redirect to g.html
      window.location.href = "/q/";
    }
  }

  function containsBlockedKeyword(input, blockedList) {
    for (let i = 0; i < blockedList.length; i++) {
      if (input.includes(blockedList[i])) {
        return true;
      }
    }
    return false;
  }

  function formatSearch(query) {
    const engine = localStorage.getItem("engine");
    if (engine === null) {
      localStorage.setItem("engine", "https://www.google.com/search?q=");
    }

    try {
      return new URL(query).toString();
    } catch (e) {}

    try {
      const url = new URL(`https://${query}`);
      if (url.hostname.includes(".")) return url.toString();
    } catch (e) {}

    return new URL(engine + `${query}`).toString();
  }

  const blocked = [
    "porn",
    "sex",
    "xxx",
    "hentai",
    "pornhub.com",
    "xxx.com",
    "4chan.org",
  ];
});

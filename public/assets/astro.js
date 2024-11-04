document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".input");
  input.addEventListener("keydown", handleInput);

  function handleInput(e) {
    if (e.key !== "Enter") return;
    if (containsBlockedKeyword(input.value, blocked)) {
      window.location.replace("/blocked.html");
    } else {
      const query = formatSearch(input.value);
        localStorage.setItem("url", "/u/liftoff/" + __uv$config.encodeUrl(query));
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
    "xvideos",
  ];
});

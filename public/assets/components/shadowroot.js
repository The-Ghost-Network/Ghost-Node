class ShadowRoot extends HTMLElement {
  constructor(text_c) {
    super();
  }
  render() {
    const shadow = this.attachShadow({ mode: "open" });
    this.container = document.createElement("div");
    container.innerHTML = this.text_c;
    return this.container;
  }
}

customElements.define("shadow-root", ShadowRoot);

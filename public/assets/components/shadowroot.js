class ShadowElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.divElement = document.createElement('div');
    this.divElement.innerHTML = this.getAttribute('txt') || '';
    this.shadowRoot.appendChild(this.divElement);
  }
  get txt() {
    return this.getAttribute('txt');
  }
  set txt(value) {
    this.setAttribute('txt', value);
  }
  static get observedAttributes() {
    return ['txt', 'shadowDomStyle'];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'txt') {
      this.divElement.innerHTML = newValue;
  }
}}
customElements.define('shadow-element', ShadowElement);

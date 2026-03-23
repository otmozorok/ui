export function define(name, component) {
  customElements.get(name) || customElements.define(name, component);
}

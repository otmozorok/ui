import { ICON, ICONS, WebComponent } from '../.shared/index.js';

const SPRITE_PATH = new URL('./sprites.svg?v0.5#', import.meta.url).href;

export class IconComponent extends WebComponent {
  static observedAttributes = ['name', 'size'];

  constructor() {
    super();

    this.shadowRoot.innerHTML = /*html*/ `
        <style>
            :host {
                display: inline-grid;
            }
        </style>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <use href="${SPRITE_PATH}" />
        </svg>
        `;

    this.$svg = this.shadowRoot.querySelector('svg');
    this.$use = this.shadowRoot.querySelector('use');

    this.size = 24;
  }

  /** @param {number} val */
  set size(val) {
    if (val) {
      this.$svg.setAttribute('width', `${val}px`);
      this.$svg.setAttribute('height', `${val}px`);
    }
  }

  /** @param {ICON} val*/
  set name(val) {
    if (ICONS.includes(val)) {
      const href = this.$use.getAttribute('href');
      const arr = href.split('#');
      arr[1] = val;
      this.$use.setAttribute('href', arr.join('#'));
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'name' && ICONS.includes(newValue)) {
      this.name = newValue;
    }

    if (name === 'size') {
      this.size = newValue;
    }
  }
}

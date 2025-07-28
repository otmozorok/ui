import { ICON, WebComponent } from '../.shared/index.js';

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
        <use href="${import.meta.resolve('/icon/sprites.svg?v0.4#')}" />
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
    switch (val) {
      case ICON.ChevronDown:
      case ICON.ChevronLeft:
      case ICON.ChevronRight:
      case ICON.ChevronUp:
      case ICON.CircleHelp:
      case ICON.HandMetal:
      case ICON.Settings:
      case ICON.Trash: {
        const href = this.$use.getAttribute('href');
        const arr = href.split('#');
        arr[1] = val;
        this.$use.setAttribute('href', arr.join('#'));
      }
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'name') {
      switch (newValue) {
        case ICON.ChevronDown:
        case ICON.ChevronLeft:
        case ICON.ChevronRight:
        case ICON.ChevronUp:
        case ICON.CircleHelp:
        case ICON.HandMetal:
        case ICON.Settings:
        case ICON.Trash:
          this.name = newValue;
          break;
      }
    }

    if (name === 'size') {
      this.size = newValue;
    }
  }
}

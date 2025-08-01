import { COLORS, SHAPES, MODES } from '../consts';

export class WebComponent extends HTMLElement {
  constructor(template) {
    super();
    this.attachShadow({ mode: 'open' });
    if (template) {
      this.shadowRoot.appendChild(template.cloneNode(true));
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue == newValue) return;

    if (name === 'color' && COLORS.includes(newValue)) {
      this.color = newValue;
    }

    if (name === 'shape' && SHAPES.includes(newValue)) {
      this.shape = newValue;
    }

    if (name === 'mode' && MODES.includes(newValue)) {
      this.mode = newValue;
    }

    if (name === 'count') {
      this.count = Number(newValue);
    }
    if (name === 'rounded' && newValue !== oldValue) {
      this.rounded = newValue === '' ? true : false;
    }

    if (name === 'loading' && oldValue !== newValue) {
      this.loading = newValue === '' ? true : false;
    }

    if (name === 'size-number') {
      this.sizeNumber = Number(newValue);
    }

    if (name === 'src') {
      this.src = newValue;
    }
  }
}

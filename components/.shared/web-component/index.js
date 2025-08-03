import { COLORS, SHAPES, MODES, APPEARANCES, WCATTR, SIZES, ICONS } from '../consts';

export class WebComponent extends HTMLElement {
  constructor(template) {
    super();
    this.attachShadow({ mode: 'open' });
    if (template) {
      this.shadowRoot.appendChild(template.cloneNode(true));
    }
  }

  connectedCallback() {
    console.log(
      '%c connected ',
      'color: white; background-color: black; padding: 2px 4px; border-radius: 2px;',
      this.tagName.toLowerCase()
    );
  }

  disconnectedCallback() {
    console.log(
      '%c disconnected ',
      'color: white; background-color: black; padding: 2px 4px; border-radius: 2px;',
      this.tagName.toLowerCase()
    );
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue == newValue) return;

    if (name === WCATTR.Color && COLORS.includes(newValue)) {
      this.color = newValue;
    }

    if (name === WCATTR.Shape && SHAPES.includes(newValue)) {
      this.shape = newValue;
    }

    if (name === WCATTR.Mode && MODES.includes(newValue)) {
      this.mode = newValue;
    }

    if (name === WCATTR.Appearance && APPEARANCES.includes(newValue)) {
      this.appearance = newValue;
    }

    if (name === WCATTR.Name && ICONS.includes(newValue)) {
      this.name = newValue;
    }

    if (name === WCATTR.Size && SIZES.includes(newValue)) {
      this.size = newValue;
    }

    if (name === WCATTR.Rounded) {
      this.rounded = newValue === '' ? true : false;
    }

    if (name === WCATTR.Loading) {
      this.loading = newValue === '' ? true : false;
    }

    if (name === WCATTR.SizeNumber) {
      this.sizeNumber = newValue;
    }

    if (name === WCATTR.Value) {
      this.value = newValue;
    }

    if (name === WCATTR.Src) {
      this.src = newValue;
    }
  }
}

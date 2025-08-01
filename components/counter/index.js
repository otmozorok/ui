import { APPEARANCES, rounded, WCATTR, WebComponent } from '../.shared/index.js';
import template from './template.js';

/**
 * Counter
 * @link https://otmozorok.github.io/ui/?path=/docs/components-counter--docs
 */
export class CounterComponent extends WebComponent {
  static observedAttributes = [WCATTR.Value, WCATTR.Rounded, WCATTR.Appearance];

  constructor() {
    super(template);

    this.$span = this.shadowRoot.querySelector('span');
  }

  get rounded() {
    return this.hasAttribute(WCATTR.Rounded);
  }

  set rounded(val) {
    val ? this.setAttribute(WCATTR.Rounded, '') : this.removeAttribute(WCATTR.Rounded);
    this.#updateText(this.value);
  }

  get value() {
    return Number(this.getAttribute(WCATTR.Value));
  }

  set value(val) {
    this.setAttribute(WCATTR.Value, val);
    this.#updateText(val);
  }

  get appearance() {
    return this.getAttribute(WCATTR.Appearance);
  }

  set appearance(val) {
    if (APPEARANCES.includes(val)) {
      this.setAttribute(WCATTR.Appearance, val);
    }
  }

  #updateText(val) {
    this.rounded ? (this.$span.innerText = rounded(val)) : (this.$span.innerText = val);
  }

  connectedCallback() {
    this.value = this.value ?? '0';
  }
}

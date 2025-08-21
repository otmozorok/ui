import { APPEARANCE, WCATTR } from '../../consts/index.js';
import { appearanceProp } from '../../props/index.js';
import { rounded } from '../../utils/index.js';
import { WebComponent } from '../../web-component/index.js';
import template from './template.js';

/**
 * Counter
 * @link https://otmozorok.github.io/ui/?path=/docs/components-counter--docs
 */
export class CounterComponent extends WebComponent {
  static observedAttributes = [WCATTR.Value, WCATTR.Rounded, WCATTR.Appearance];

  constructor() {
    super(template, { ...appearanceProp });

    this.$span = this.$('span');
  }

  get rounded() {
    return this.hasAttribute(WCATTR.Rounded);
  }

  set rounded(val) {
    val ? this.setAttribute(WCATTR.Rounded, '') : this.removeAttribute(WCATTR.Rounded);
    this.#updateText();
  }

  get value() {
    return Number(this.getAttribute(WCATTR.Value));
  }

  set value(val) {
    this.setAttribute(WCATTR.Value, val);
    this.#updateText(val);
  }

  #updateText() {
    this.rounded
      ? (this.$span.innerText = rounded(this.value))
      : (this.$span.innerText = this.value);
  }

  connectedCallback() {
    this.value = this.value ?? '0';
    this.appearance = this.appearance || APPEARANCE.Themed;
  }
}

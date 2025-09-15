import { APPEARANCE, WCATTR } from '../../consts/index.js';
import { rounded } from '../../utils/index.js';
import { WebComponent } from '../../web-component/index.js';
import props from './props.js';
import template from './template.js';

/**
 * Counter
 * @link https://otmozorok.github.io/ui/?path=/docs/components-counter--docs
 */
export class CounterComponent extends WebComponent {
  static observedAttributes = [WCATTR.Value, WCATTR.Rounded, WCATTR.Appearance, WCATTR.Inverse];

  constructor() {
    super(template, props);

    this.$span = this.$('span');
  }

  #updateText() {
    this.rounded
      ? (this.$span.innerText = rounded(this.value))
      : (this.$span.innerText = this.value);
  }

  connectedCallback() {
    super.connectedCallback();
    this.value = this.value || 0;
    this.appearance = this.appearance || APPEARANCE.Themed;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);
    this.#updateText(this.value);
  }
}

import { APPEARANCE, MODE, SIZE, WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './button.template.js';

/**
 * Button
 * @docs https://otmozorok.github.io/ui/?path=/docs/components-button--docs
 */
export class ButtonComponent extends WebComponent {
  static observedAttributes = [WCATTR.Mode, WCATTR.Size, WCATTR.Loading];

  constructor() {
    super(template, props);
    this.$button = this.$('button');
  }

  connectedCallback() {
    super.connectedCallback();
    this.mode = this.mode || MODE.Primary;
    this.appearance = this.appearance || APPEARANCE.Themed;
    this.size = this.size || SIZE.Medium;

    this.$button.addEventListener('click', () => {
      this.dispatchEvent(
        new Event('click', {
          bubbles: false,
          composed: true,
        })
      );
    });
  }
}

import { APPEARANCE, MODE, SIZE, WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './button.template.js';

/**
 * Button
 * @docs https://otmozorok.github.io/ui/?path=/docs/components-button--docs
 */
export class ButtonComponent extends WebComponent {
  static observedAttributes = [
    WCATTR.Mode,
    WCATTR.Size,
    WCATTR.Appearance,
    WCATTR.Loading,
    WCATTR.FullWidth,
  ];

  constructor() {
    super(template, props);
    this.$button = this.$('button');
  }

  connectedCallback() {
    super.connectedCallback();

    this.mode = this.mode || MODE.Primary;
    this.appearance = this.appearance || APPEARANCE.Themed;
    this.size = this.size || SIZE.Medium;

    this.$button.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();

      this.dispatchEvent(
        new CustomEvent('click', {
          bubbles: false,
          composed: true,
        })
      );
    });
  }
}

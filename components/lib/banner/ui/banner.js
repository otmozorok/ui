import { WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './banner.template.js';

/**
 * Banner
 * @link https://otmozorok.github.io/ui/?path=/docs/components-banner--docs
 */
export class BannerComponent extends WebComponent {
  static observedAttributes = [WCATTR.Src, WCATTR.Appearance, WCATTR.Closable];

  constructor() {
    super(template, props);

    /**
     * @type {HTMLDivElement}
     */
    this.$wrapper = this.$('div');
    /**
     * @type {HTMLButtonElement}
     */
    this.$button = this.$('button');
  }

  connectedCallback() {
    super.connectedCallback();

    this.$button.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();

      this.dispatchEvent(
        new CustomEvent('close', {
          bubbles: false,
          composed: true,
        })
      );
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === WCATTR.Src && newValue) {
      this.$wrapper.style.backgroundImage = `url(${newValue})`;
    }

    super.attributeChangedCallback(name, oldValue, newValue);
  }
}

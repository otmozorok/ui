import { WCATTR } from '../../consts/index.js';
import { WebComponent } from '../../web-component/index.js';
import template from './template.js';

/**
 * Banner
 * @link https://otmozorok.github.io/ui/?path=/docs/components-banner--docs
 */
export class BannerComponent extends WebComponent {
  static observedAttributes = [WCATTR.Src, WCATTR.Appearance, WCATTR.Closable];

  constructor() {
    super(template);

    /**
     * @type {HTMLDivElement}
     */
    this.$wrapper = this.$('div');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === WCATTR.Src && newValue) {
      this.$wrapper.style.backgroundImage = `url(${newValue})`;
    }

    super.attributeChangedCallback(name, oldValue, newValue);
  }
}

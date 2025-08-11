import { SIZE, SIZES, WCATTR, WebComponent } from '../.shared/index.js';
import template from './template.js';

/**
 * Loader
 * @docs https://otmozorok.github.io/ui/?path=/docs/components-loader--docs
 */
export class LoaderComponent extends WebComponent {
  static observedAttributes = [WCATTR.Size];

  constructor() {
    super(template);

    this.$loader = this.$('loader');
  }

  get size() {
    return this.getAttribute(WCATTR.Size);
  }

  set size(val) {
    if (SIZES.includes(val)) {
      this.setAttribute(WCATTR.Size, val);
    }
  }

  connectedCallback() {
    this.size = this.size || SIZE.Medium;
  }
}

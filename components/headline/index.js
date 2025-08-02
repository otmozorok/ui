import { SIZE, SIZES, WCATTR, WebComponent } from '../.shared/index.js';
import template from './template.js';

/**
 * Headline
 * @docs https://otmozorok.github.io/ui/?path=/docs/typography-headline--docs
 */
export class HeadlineComponent extends WebComponent {
  static observedAttributes = [WCATTR.Size];

  constructor() {
    super(template);

    this.$h = this.shadowRoot.querySelector('h1');
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

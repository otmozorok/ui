import { SIZE, WCATTR } from '../../consts/index.js';
import { WebComponent } from '../../web-component/index.js';
import props from './props.js';
import template from './template.js';

/**
 * Headline
 * @docs https://otmozorok.github.io/ui/?path=/docs/typography-headline--docs
 */
export class HeadlineComponent extends WebComponent {
  static observedAttributes = [WCATTR.Size, WCATTR.Appearance, WCATTR.Caps];

  constructor() {
    super(template, props);
  }

  connectedCallback() {
    this.size = this.size || SIZE.Medium;
  }
}

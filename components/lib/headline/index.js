import { SIZE, WCATTR } from '../../consts/index.js';
import { sizeProp } from '../../props/index.js';
import { WebComponent } from '../../web-component/index.js';
import template from './template.js';

/**
 * Headline
 * @docs https://otmozorok.github.io/ui/?path=/docs/typography-headline--docs
 */
export class HeadlineComponent extends WebComponent {
  static observedAttributes = [WCATTR.Size];

  constructor() {
    super(template, { ...sizeProp });
  }

  connectedCallback() {
    this.size = this.size || SIZE.Medium;
  }
}

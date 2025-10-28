import { APPEARANCE, SIZE, WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './headline.template.js';

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
    super.connectedCallback();

    this.size = this.size || SIZE.Medium;
    this.appearance = this.appearance || APPEARANCE.Themed;
  }
}

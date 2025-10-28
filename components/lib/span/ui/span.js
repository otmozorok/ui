import { APPEARANCE, WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './span.template.js';

/**
 * Span
 * @docs https://otmozorok.github.io/ui/?path=/docs/typography-span--docs
 */
export class SpanComponent extends WebComponent {
  static observedAttributes = [WCATTR.Appearance, WCATTR.Caps];

  constructor() {
    super(template, props);
  }

  connectedCallback() {
    super.connectedCallback();

    this.appearance = this.appearance || APPEARANCE.Themed;
  }
}

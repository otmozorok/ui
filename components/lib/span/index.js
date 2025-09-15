import { WebComponent } from '../../web-component/index.js';
import props from './props.js';
import template from './template.js';

/**
 * Span
 * @docs https://otmozorok.github.io/ui/?path=/docs/typography-span--docs
 */
export class SpanComponent extends WebComponent {
  constructor() {
    super(template, props);
  }
}

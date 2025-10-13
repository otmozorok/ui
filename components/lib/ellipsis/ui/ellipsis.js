import { WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './ellipsis.template.js';

/**
 * Ellipsis
 * @docs https://otmozorok.github.io/ui/?path=/docs/typography-ellipsis--docs
 */
export class EllipsisComponent extends WebComponent {
  static observedAttributes = [WCATTR.MaxLines];

  constructor() {
    super(template, props);
  }
}

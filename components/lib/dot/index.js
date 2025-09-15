import { WCATTR } from '../../consts/index.js';
import { WebComponent } from '../../web-component/index.js';
import props from './props.js';
import template from './template.js';

/**
 * Dot
 * @link https://otmozorok.github.io/ui/?path=/docs/components-dot--docs
 */
export class DotComponent extends WebComponent {
  static observedAttributes = [WCATTR.Appearance];

  constructor() {
    super(template, props);
  }
}

import { WCATTR } from '../../consts/index.js';
import { appearanceProp } from '../../props/index.js';
import { WebComponent } from '../../web-component/index.js';
import template from './template.js';

/**
 * Dot
 * @link https://otmozorok.github.io/ui/?path=/docs/components-dot--docs
 */
export class DotComponent extends WebComponent {
  static observedAttributes = [WCATTR.Value, WCATTR.Rounded, WCATTR.Appearance];

  constructor() {
    super(template, { ...appearanceProp });
  }
}

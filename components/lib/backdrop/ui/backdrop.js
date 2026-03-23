import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './backdrop.template.js';

/**
 * Backdrop
 * @link https://otmozorok.github.io/ui/?path=/docs/components-backdrop--docs
 */
export class BackdropComponent extends WebComponent {
  static observedAttributes = [];

  constructor() {
    super(template, props);
  }
}

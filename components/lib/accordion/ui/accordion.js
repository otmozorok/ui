import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './accordion.template.js';

/**
 * Accordion
 * @link https://otmozorok.github.io/ui/?path=/docs/components-accordion--docs
 */
export class AccordionComponent extends WebComponent {
  constructor() {
    super(template, props);
  }
}

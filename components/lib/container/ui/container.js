import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './container.template.js';

/**
 * Container
 * @docs https://otmozorok.github.io/ui/?path=/docs/container--docs
 */
export class ContainerComponent extends WebComponent {
  constructor() {
    super(template, props);
  }
}

import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './dot-navigation.template.js';

/**
 * DotNavigation
 * @link https://otmozorok.github.io/ui/?path=/docs/components-dot-navigation--docs
 */
export class DotNavigationComponent extends WebComponent {
  static observedAttributes = [];

  constructor() {
    super(template, props);
  }
}

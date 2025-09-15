import { SIZE, WCATTR } from '../../consts/index.js';
import { WebComponent } from '../../web-component/index.js';
import props from './props.js';
import template from './template.js';

/**
 * Loader
 * @docs https://otmozorok.github.io/ui/?path=/docs/components-loader--docs
 */
export class LoaderComponent extends WebComponent {
  static observedAttributes = [WCATTR.Size];

  constructor() {
    super(template, props);
  }

  connectedCallback() {
    super.connectedCallback();
    this.size = this.size || SIZE.Medium;
  }
}

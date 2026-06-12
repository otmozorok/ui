import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './{{componentNameKebab}}.template.js';

/**
 * {{ComponentName}}
 * @link https://otmozorok.github.io/ui/?path=/docs/components-{{componentNameKebab}}--docs
 */
export class {{ComponentName}}Component extends WebComponent {
  static observedAttributes = [];

  constructor() {
    super(template, props);
  }
}

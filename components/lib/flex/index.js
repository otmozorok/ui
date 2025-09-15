import { WCATTR } from '../../consts/index.js';
import { WebComponent } from '../../web-component/index.js';
import props from './props.js';
import template from './template.js';

export class FlexComponent extends WebComponent {
  static observedAttributes = [WCATTR.Gap];

  constructor() {
    super(template, props);
  }
}

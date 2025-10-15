import { WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './flex.template.js';

export class FlexComponent extends WebComponent {
  static observedAttributes = [WCATTR.Gap, WCATTR.AlignItems, WCATTR.Direction];

  constructor() {
    super(template, props);
  }
}

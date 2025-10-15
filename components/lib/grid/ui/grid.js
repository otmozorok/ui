import { WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './grid.template.js';

export class GridComponent extends WebComponent {
  static observedAttributes = [WCATTR.Gap, WCATTR.Rows, WCATTR.Cols];

  constructor() {
    super(template, props);
  }
}

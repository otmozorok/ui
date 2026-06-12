import { WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './bottom-sheet.template.js';

/**
 * BottomSheet
 * @link https://otmozorok.github.io/ui/?path=/docs/components-bottom-sheet--docs
 */
export class BottomSheetComponent extends WebComponent {
  static observedAttributes = [WCATTR.Open, WCATTR.Size];

  constructor() {
    super(template, props);
  }
}

import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './input.template.js';

export class InputComponent extends WebComponent {
  constructor() {
    super(template, props);

    /** @type {HTMLInputElement} */
    this.$input = this.$('input');
  }
}

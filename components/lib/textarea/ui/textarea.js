import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './textarea.template.js';

export class TextareaComponent extends WebComponent {
  constructor() {
    super(template, props);

    /** @type {HTMLTextAreaElement} */
    this.$textarea = this.$('textarea');
  }

  connectedCallback() {
    super.connectedCallback?.();

    this.$textarea.addEventListener('focus', () => {
      console.log('focus');
    });
  }
}

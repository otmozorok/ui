import { formProps } from '../../props/form-props.js';
import { WebComponent } from '../../web-component/index.js';
import template from './template.js';

/**
 * Form Component
 * @docs https://otmozorok.github.io/ui/?path=/docs/form-form--docs
 */
export class FormComponent extends WebComponent {
  static observedAttributes = ['action', 'method', 'enctype', 'name', 'novalidate'];

  constructor() {
    super(template, formProps);
    this.$form = this.$('form');
  }

  connectedCallback() {
    this.method = this.method || 'GET';
    this.enctype = this.enctype || 'application/x-www-form-urlencoded';

    this.$form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.dispatchEvent(
        new Event('submit', {
          bubbles: false,
          composed: true,
          detail: {
            formData: new FormData(this.$form),
            action: this.action,
            method: this.method,
          },
        })
      );
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback?.(name, oldValue, newValue);

    if (this.$form) {
      this.$form.setAttribute(name, newValue);
    }
  }
}

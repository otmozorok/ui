import { APPEARANCE, WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './checkbox.template.js';

export class CheckboxComponent extends WebComponent {
  static observedAttributes = [
    WCATTR.Appearance,
    WCATTR.Checked,
    WCATTR.Disabled,
    WCATTR.Name,
    WCATTR.Indeterminate,
  ];

  constructor() {
    super(template, props);

    this.$input = this.$('input');
  }

  connectedCallback() {
    super.connectedCallback();

    this.appearance = this.appearance || APPEARANCE.Themed;

    this.addEventListener('click', () => {
      if (!this.disabled) {
        this.toggle();
      }
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    super.attributeChangedCallback(name, oldValue, newValue);

    if (name === WCATTR.Checked) {
      this.dispatchEvent(
        new CustomEvent('change', {
          bubbles: false,
          composed: true,
          detail: {
            checked: this.checked,
          },
        })
      );
      this.$input.checked = this.checked;
    }

    if (name === WCATTR.Name) {
      this.$input.name = this.name;
    }
  }

  toggle() {
    this.checked = !this.checked;
    if (!this.checked) {
      this.indeterminate = false;
    }
  }
}

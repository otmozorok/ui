import { rounded, WebComponent } from '@wc/shared';

export class CounterComponent extends WebComponent {
  static observedAttributes = ['count', 'rounded'];

  constructor() {
    super();

    this.shadowRoot.innerHTML = /*html*/ `
        <style>
            span {
                align-items: center;
                border-radius: 12px;
                box-sizing: border-box;
                display: inline-flex;
                font-weight: 500;
                font-size: 0.875rem;
                min-height: 20px;
                min-width: 20px;
                padding: 0 6px;
            }
        
            span {
                background-color: var(--primary);
                color: var(--text-color);
            }
        
            :host([inverse]) span {
                background-color: var(--text-color);
                color: var(--primary);
            }
        
            :host([destructive]) span {
                background-color: var(--negative);
                color: var(--text-color);
            }
        
            :host([inverse][destructive]) span {
                background-color: var(--text-color);
                color: var(--negative);
            }
        </style>
        
        <span></span>
        `;

    this.$span = this.shadowRoot.querySelector('span');
  }

  get rounded() {
    return this.hasAttribute('rounded');
  }

  set rounded(value) {
    if (value) {
      this.setAttribute('rounded', '');
    } else {
      this.removeAttribute('rounded');
    }
    this.updateText(this.count);
  }

  get count() {
    return parseInt(this.getAttribute('count') || '0');
  }

  set count(value) {
    if (value !== this.count) this.setAttribute('count', parseInt(value));
    this.updateText(value);
  }

  updateText(value) {
    if (this.rounded) {
      this.$span.innerText = rounded(value);
    } else {
      this.$span.innerText = value;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'count') {
      this.count = parseInt(newValue.replace(/[^0-9]/g, ''));
    }
    if (name === 'rounded' && newValue !== oldValue) {
      this.rounded = newValue === '' ? true : false;
    }
  }
}

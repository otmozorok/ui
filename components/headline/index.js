import { SIZE, SIZES, WebComponent } from '../.shared/index.js';

export class HeadlineComponent extends WebComponent {
  static observedAttributes = ['size'];

  constructor() {
    super();

    this.shadowRoot.innerHTML = /*html*/ `
        <style>
            h1 {
                margin: 0;
                padding: 0;
                font-weight: 600;
            }
        
            .large {
                font-size: 32px;
            }
        
            .medium {
                font-size: 25px;
            }
        
            .small {
                font-size: 18px;
            }
        </style>
        
        <h1>
            <slot></slot>
        </h1>
        `;

    this.$h = this.shadowRoot.querySelector('h1');

    /**
     * @type {SIZE}
     */
    this.size = SIZE.Medium;
  }

  /**
   * @param {SIZE} val
   */
  set size(val) {
    switch (val) {
      case SIZE.Small:
      case SIZE.Medium:
      case SIZE.Large:
        this.$h.classList.remove(...SIZES);
        this.$h.classList.add(val);
        break;

      default:
        break;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'size') {
      switch (newValue) {
        case SIZE.Small:
        case SIZE.Medium:
        case SIZE.Large:
          this.size = newValue;
          break;
      }
    }
  }
}

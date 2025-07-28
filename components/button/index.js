import { MODE, MODES, SIZE, SIZES, WebComponent } from '../.shared/index.js';

export class ButtonComponent extends WebComponent {
  static observedAttributes = ['mode', 'size', 'loading'];

  constructor() {
    super();

    this.shadowRoot.innerHTML = /*html*/ `
        <style>
            button {
                align-items: center;
                border: 0;
                box-sizing: border-box;
                cursor: pointer;
                display: flex;
                justify-content: center;
                overflow: hidden;
                position: relative;
                text-decoration: none;
                gap: 6px;
                font-family: var(--font-family);
                line-height: 1;
        
                &>wc-loader {
                    opacity: 0;
                    position: absolute;
                    height: 20px;
                    width: 20px;
                }
            }
        
            span {
                line-height: 1;
            }
        
            :host([loading]) span {
                opacity: 0;
            }
        
            :host([loading]) wc-loader {
                opacity: 1;
            }
        
            .small {
                padding: 0 12px;
                border-radius: 10px;
                height: 28px;
                min-width: 28px;
                font-size: 0.875rem;
                font-weight: 500;
            }
        
            .medium {
                padding: 0 12px;
                border-radius: 12px;
                height: 40px;
                min-width: 40px;
                font-size: 1rem;
                font-weight: 500;
            }
        
            .large {
                padding: 0 20px;
                border-radius: 16px;
                height: 52px;
                min-width: 52px;
                font-size: 1.0625rem;
                font-weight: 600;
            }
        
            .link {
                background-color: transparent;
                color: var(--primary);
                padding: 0;
        
                &:hover {
                    color: #479fff
                }
            }
        
            .primary {
                background-color: var(--primary);
                color: var(--text-button-color);
        
                &:hover {
                    background-color: var(--primary-hover);
                }
            }
        
            .secondary {
                background-color: var(--secondary);
                color: var(--primary);
        
                &:hover {
                    background-color: var(--secondary-hover);
                }
            }
        
            .tertiary {
                background-color: transparent;
                color: var(--primary);
        
                &:hover {
                    background-color: hsla(var(--secondary-hsl), 0.04);
                }
            }
        
            :host([destructive]) button {
                background-color: var(--negative);
        
                &:hover {
                    background-color: var(--negative-hover);
                }
            }
        
            :host([fullwidth]) button {
                width: 100%;
            }
        
            :host {
                display: contents;
            }
        </style>
        
        <button>
            <wc-loader></wc-loader>
            <span>
                <slot></slot>
            </span>
            <slot name="after"></slot>
        </button>
        `;

    this.$button = this.shadowRoot.querySelector('button');
    this.$loader = this.shadowRoot.querySelector('wc-loader');
    this.$span = this.shadowRoot.querySelector('span');

    /**
     * @type {MODE}
     */
    this.mode = MODE.Primary;

    /**
     * @type {SIZE}
     */
    this.size = SIZE.Medium;
  }

  connectedCallback() {
    this.$button.addEventListener('click', () => {
      this.dispatchEvent(
        new Event('click', {
          bubbles: false,
          composed: true,
        })
      );
    });
  }

  /**
   * @param {MODE} val
   */
  set mode(val) {
    switch (val) {
      case MODE.Secondary:
      case MODE.Primary:
      case MODE.Link:
      case MODE.Tertiary:
        this.$button.classList.remove(...MODES);
        this.$button.classList.add(val);
        break;

      default:
        break;
    }
  }

  /**
   * @param {SIZE} val
   */
  set size(val) {
    switch (val) {
      case SIZE.Small:
      case SIZE.Medium:
      case SIZE.Large:
        this.$button.classList.remove(...SIZES);
        this.$button.classList.add(val);
        break;

      default:
        break;
    }
  }

  get loading() {
    return this.hasAttribute('loading');
  }

  set loading(val) {
    if (val) {
      this.setAttribute('loading', '');
    } else {
      this.removeAttribute('loading');
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'mode') {
      switch (newValue) {
        case MODE.Secondary:
        case MODE.Primary:
        case MODE.Link:
        case MODE.Tertiary:
          this.mode = newValue;
          break;
      }
    }

    if (name === 'size') {
      switch (newValue) {
        case SIZE.Small:
        case SIZE.Medium:
        case SIZE.Large:
          this.size = newValue;
          break;
      }
    }

    if (name === 'loading' && oldValue !== newValue) {
      this.loading = newValue === '' ? true : false;
    }
  }
}

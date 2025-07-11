import { POSITION, POSITIONS, WebComponent } from '../.shared/index.js';

export class TooltipComponent extends WebComponent {
  static observedAttributes = ['position'];

  constructor() {
    super();

    this.shadowRoot.innerHTML = /*html*/ `
        <style>
            :host {
                display: inline-grid;
            }
        
            .trigger {
                position: relative;
                display: inline-flex;
                anchor-name: --tooltip;
            }
        
            .tooltip {
                --color-shadow: hsla(var(--text-color-inverse-hsl), 0.2);
                display: none;
                position: absolute;
                padding: 9px 20px 10px 20px;
                background-color: hsla(var(--text-color-hsl), 0.4);
                text-shadow: 1px 1px 1px var(--color-shadow),
                    -1px -1px 1px var(--color-shadow), 1px -1px 1px var(--color-shadow),
                    -1px 1px 1px var(--color-shadow);
                white-space: nowrap;
                border-radius: 10px;
                font-weight: 500;
                view-transition-name: --tooltip;
                position-anchor: --tooltip;
                backdrop-filter: blur(10px);
                box-shadow: var(--shadow);
                z-index: var(--z-tooltip);
        
                &.bottom {
                    position-area: block-end;
                    margin-top: 5px;
                }
        
                &.top {
                    position-area: block-start;
                    margin-bottom: 5px;
                }
        
                &.right {
                    position-area: inline-end center;
                    margin-left: 5px;
                }
        
                &.left {
                    position-area: inline-start center;
                    margin-right: 5px;
                }
            }
        
            .trigger:hover~.tooltip {
                display: block;
            }
        </style>
        
        <slot name="trigger" class="trigger">
            <wc-icon name="circle-help"></wc-icon>
        </slot>
        <div class="tooltip">
            <slot></slot>
        </div>
        `;

    this.$tooltip = this.shadowRoot.querySelector('.tooltip');

    /**
     * @type {POSITION}
     */
    this.position = POSITION.Bottom;
  }

  /**
   * @param {POSITION} val
   */
  set position(val) {
    switch (val) {
      case POSITION.Bottom:
      case POSITION.Left:
      case POSITION.Right:
      case POSITION.Top:
        this.$tooltip.classList.remove(...POSITIONS);
        this.$tooltip.classList.add(val);
        break;

      default:
        break;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'position') {
      switch (newValue) {
        case POSITION.Bottom:
        case POSITION.Left:
        case POSITION.Right:
        case POSITION.Top:
          this.position = newValue;
          break;
      }
    }
  }
}

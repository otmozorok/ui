import { WebComponent } from '../../shared/index.js';

export class MenuHeaderComponent extends WebComponent {
  constructor() {
    super();

    this.shadowRoot.innerHTML = /*html*/ `
        <style>
            div {
                display: flex;
                line-height: unset;
                align-items: center;
                justify-content: space-between;
                color: hsla(var(--text-color-hsl), 0.5);
                padding: 4px 12px;
                min-height: 28px;
                line-height: 1;
                box-sizing: border-box;
            }
        
            slot:not([name="after"]) {
                align-items: center;
                box-sizing: border-box;
                display: flex;
                font-size: 0.75rem;
                font-weight: 600;
                flex-grow: 1;
            }
        
            :host([fullwidth]) slot:not([name="after"]) {
                padding: 4px 8px;
            }
        
            :host([caps]) slot:not([name="after"]) {
                text-transform: uppercase;
            }
        
            slot[name="after"]::slotted(*) {
                align-items: center;
                display: flex;
                justify-content: center;
                margin-right: 12px;
                line-height: 1;
                font-size: 0.875rem;
                font-weight: 500;
            }
        </style>
        
        <div>
            <slot></slot>
            <slot name="after"></slot>
        </div>
        `;
  }
}

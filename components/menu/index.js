import {
    WebComponent
} from '../../shared/index.js';

export class MenuComponent extends WebComponent {
    constructor() {
        super();

        this.shadowRoot.innerHTML = /*html*/ `
        <style>
            :host([island]) {
                .menu {
                    padding: 0 12px;
                }
        
                .content {
                    border-radius: 16px;
                    overflow: hidden;
                }
            }
        
            :host([filled]) .content {
                background-color: var(--bg-secondary-color);
            }
        
            slot[name="header"]::slotted(*) {
                text-transform: uppercase;
                align-items: center;
                box-sizing: border-box;
                color: hsla(var(--text-color-hsl), 0.5);
                display: flex;
                min-height: 28px;
                padding: 4px 12px;
                line-height: 1;
                font-size: 12px;
                font-weight: 600;
            }
        </style>
        
        <div class="menu">
            <slot name="header"></slot>
            <div class="content">
                <slot></slot>
            </div>
        </div>
        `;
    }
}
import {
    WebComponent
} from '../../shared/index.js';

export class MenuActionComponent extends WebComponent {
    constructor() {
        super();

        this.shadowRoot.innerHTML = /*html*/ `
        <style>
            button {
                background: unset;
                border: unset;
                font-family: inherit;
                line-height: unset;
                overflow: hidden;
                padding: 8px 12px;
                position: relative;
                text-align: unset;
                text-decoration: none;
                color: var(--text-color);
                min-height: 56px;
                cursor: pointer;
                align-items: center;
                box-sizing: border-box;
                display: flex;
                width: 100%;
        
                &:hover {
                    background-color: hsla(var(--text-color-hsl), 0.04);
                }
            }
        
            .action {
                display: flex;
                flex-direction: column;
                flex-grow: 1;
                font-weight: 500;
                line-height: 1;
                min-width: 0;
            }
        
            slot[name="before"]::slotted(*) {
                align-items: center;
                display: flex;
                justify-content: center;
                margin-right: 12px;
                min-height: 40px;
                min-width: 40px;
                line-height: 1;
            }
        
            .arrow {
                display: none;
                color: hsla(var(--text-color-hsl), 0.3);
            }
        
            :host([arrow]) .arrow {
                display: block;
            }
        
            :host([compact]) button {
                min-height: 48px;
                padding: 4px 12px;
            }
        </style>
        
        <button>
            <slot name="before"></slot>
            <span class="action">
                <slot></slot>
            </span>
            <wc-icon class="arrow" name="chevron-right" size="16"></wc-icon>
        </button>
        `;
    }
}
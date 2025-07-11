import { WebComponent } from '../.shared/index.js';

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

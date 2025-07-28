import { WebComponent } from '../.shared/index.js';

export class AccordionComponent extends WebComponent {
  constructor() {
    super();

    this.shadowRoot.innerHTML = /*html*/ `
    <style>
        summary {
            display: flex;
            align-items: end;
            gap: 5px;
            cursor: pointer;

            &::-webkit-details-marker {
                display: none;
            }
        }

        details[open] .arrow {
            transform: rotate(90deg);
        }
    </style>

    <details>
        <summary>
            <slot name="header"><wc-headline>Accordion Header</wc-headline></slot>
            <wc-icon class="arrow" name="chevron-right"></wc-icon>
        </summary>
        <slot></slot>
    </details>
    `;
  }
}

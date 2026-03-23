import { WCATTR } from '../../../consts/index.js';
import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      :host {
        --wc-accordion-transition: transform var(--wc-transition);
      }
      summary {
        display: flex;
        align-items: end;
        cursor: pointer;
        line-height: 1.1;

        &::-webkit-details-marker {
          display: none;
        }
      }

      details .arrow {
        transition: var(--wc-accordion-transition);
      }

      details[${WCATTR.Open}] .arrow {
        transform: rotate(90deg) scale(0.75);
      }
    </style>

    <details>
      <summary>
        <slot name="header"></slot>
        <wc-icon class="arrow" name="chevron-right" size-number="1.5"></wc-icon>
      </summary>
      <slot></slot>
    </details>
  </template>
`;

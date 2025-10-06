import { WCATTR } from '../../../consts/index.js';
import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      summary {
        display: flex;
        align-items: end;
        gap: 0.375rem;
        cursor: pointer;
        line-height: 1;

        &::-webkit-details-marker {
          display: none;
        }
      }

      details[${WCATTR.Open}] .arrow {
        transform: rotate(90deg);
      }
    </style>

    <details>
      <summary>
        <slot name="header"></slot>
        <wc-icon class="arrow" name="chevron-right"></wc-icon>
      </summary>
      <slot></slot>
    </details>
  </template>
`;

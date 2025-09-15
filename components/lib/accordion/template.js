import { WCATTR } from '../../consts/index.js';
import { html } from '../../utils/index.js';

export default html`
  <template>
    <style>
      summary {
        display: flex;
        align-items: end;
        gap: 5px;
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
        <slot name="header"><wc-headline>Accordion Header</wc-headline></slot>
        <wc-icon class="arrow" name="chevron-right"></wc-icon>
      </summary>
      <slot></slot>
    </details>
  </template>
`;

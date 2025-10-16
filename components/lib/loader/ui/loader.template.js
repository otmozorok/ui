import { SIZE, WCATTR } from '../../../consts/index.js';
import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      loader {
        display: inline-flex;
        position: relative;

        &::after {
          content: '';
          position: absolute;
          inset: 0;
          border-right: 1px solid currentColor;
          border-radius: 0 50% 50% 0;
          animation: spin 1s linear infinite;
        }
      }

      :host([${WCATTR.Size}='${SIZE.Large}']) loader {
        width: 1.5625rem;
        height: 1.5625rem;
      }

      :host([${WCATTR.Size}='${SIZE.Medium}']) loader {
        width: 1.25rem;
        height: 1.25rem;
      }

      :host([${WCATTR.Size}='${SIZE.Small}']) loader {
        width: 0.9375rem;
        height: 0.9375rem;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    </style>

    <loader></loader>
  </template>
`;

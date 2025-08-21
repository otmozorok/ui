import { SIZE, WCATTR } from '../../consts/index.js';
import { html } from '../../utils/index.js';

export default html`
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
        width: 25px;
        height: 25px;
      }

      :host([${WCATTR.Size}='${SIZE.Medium}']) loader {
        width: 20px;
        height: 20px;
      }

      :host([${WCATTR.Size}='${SIZE.Small}']) loader {
        width: 15px;
        height: 15px;
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

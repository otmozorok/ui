import { APPEARANCE, WCATTR } from '../../consts/index.js';
import { html } from '../../utils/index.js';

export default html`
  <template>
    <style>
      span {
        display: block;
        border-radius: 50%;
        height: 6px;
        width: 6px;
      }

      span {
        background-color: var(--primary);
        color: var(--text-counter-color);
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Negative}']) span {
        background-color: var(--negative);
        color: var(--text-counter-color);
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Neutral}']) span {
        background-color: var(--neutral);
        color: var(--text-counter-inverse-color);
      }
    </style>

    <span></span>
  </template>
`;

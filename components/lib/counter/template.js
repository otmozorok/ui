import { APPEARANCE, WCATTR } from '../../consts/index.js';
import { html } from '../../utils/index.js';

export default html`
  <template>
    <style>
      span {
        align-items: center;
        border-radius: 12px;
        box-sizing: border-box;
        display: inline-flex;
        font-weight: 500;
        font-size: 0.875rem;
        min-height: 20px;
        min-width: 20px;
        padding: 0 6px;
        line-height: 1;
      }

      span {
        background-color: var(--primary);
        color: var(--text-counter-color);
      }

      :host([${WCATTR.Inverse}]) span {
        background-color: var(--text-counter-color);
        color: var(--primary);
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Negative}']) span {
        background-color: var(--negative);
        color: var(--text-counter-color);
      }

      :host([${WCATTR.Inverse}][${WCATTR.Appearance}='${APPEARANCE.Negative}']) span {
        background-color: var(--text-counter-color);
        color: var(--negative);
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Neutral}']) span {
        background-color: var(--neutral);
        color: var(--text-counter-inverse-color);
      }

      :host([${WCATTR.Inverse}][${WCATTR.Appearance}='${APPEARANCE.Neutral}']) span {
        background-color: var(--text-counter-inverse-color);
        color: var(--neutral);
      }
    </style>

    <span></span>
  </template>
`;

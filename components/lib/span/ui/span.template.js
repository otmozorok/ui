import { APPEARANCE, WCATTR } from '../../../consts/index.js';
import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      :host([${WCATTR.Appearance}='${APPEARANCE.Negative}']) span {
        color: var(--negative);
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Neutral}']) span {
        color: hsl(from var(--neutral) h s 50%);
      }

      :host([${WCATTR.Caps}]) span {
        text-transform: uppercase;
      }
    </style>

    <span>
      <slot></slot>
    </span>
  </template>
`;

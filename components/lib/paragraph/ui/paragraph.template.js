import { APPEARANCE, WCATTR } from '../../../consts/index.js';
import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      p {
        margin: 0;
        padding: 0;
      }

      :host([${WCATTR.Caps}]) p {
        text-transform: uppercase;
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Negative}']) p {
        color: var(--negative);
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Neutral}']) p {
        color: hsl(from var(--neutral) h s 50%);
      }
    </style>

    <p>
      <slot></slot>
    </p>
  </template>
`;

import { APPEARANCE, SIZE, WCATTR } from '../../../consts/index.js';
import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      h1 {
        margin: 0;
        padding: 0;
        font-weight: 600;
      }

      :host([${WCATTR.Size}='${SIZE.Large}']) h1 {
        font-size: 2rem;
      }

      :host([${WCATTR.Size}='${SIZE.Medium}']) h1 {
        font-size: 1.5625rem;
      }

      :host([${WCATTR.Size}='${SIZE.Small}']) h1 {
        font-size: 1.125rem;
      }

      :host([${WCATTR.Caps}]) h1 {
        text-transform: uppercase;
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Negative}']) h1 {
        color: var(--negative);
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Neutral}']) h1 {
        color: hsl(from var(--neutral) h s 50%);
      }
    </style>

    <h1>
      <slot></slot>
    </h1>
  </template>
`;

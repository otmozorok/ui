import { WCATTR } from '../../../consts/index.js';
import { html } from '../../../utils/index.js';

const SPRITE_PATH = new URL('./sprites.svg?v0.6#', import.meta.url).href;

export const template = html`
  <template>
    <style>
      :host {
        display: inline-grid;

        svg {
          width: var(--${WCATTR.SizeNumber});
          height: var(--${WCATTR.SizeNumber});
        }
      }
    </style>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <use href="${SPRITE_PATH}" />
    </svg>
  </template>
`;

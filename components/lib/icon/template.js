import { WCATTR } from '../../consts/index.js';
import { html } from '../../utils/index.js';

const SPRITE_PATH = new URL('./sprites.svg?v0.5#', import.meta.url).href;

export default html`
  <template>
    <style>
      :host {
        display: inline-grid;

        svg {
          width: var(--size);
          height: var(--size);
        }
      }
    </style>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <use href="${SPRITE_PATH}" />
    </svg>
  </template>
`;

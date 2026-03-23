import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      div {
        position: fixed;
        inset: 0;
        background: hsl(0deg 0% 0% / 60%);
        z-index: 1;
      }
    </style>

    <div></div>
  </template>
`;

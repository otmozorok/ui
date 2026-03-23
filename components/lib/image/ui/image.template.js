import { WCATTR } from '../../../consts/index.js';
import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      :host {
        --wc-image-border-radius: var(--${WCATTR.BorderRadius});
        --wc-image-width: var(--${WCATTR.Width}, 100%);
        --wc-image-height: var(--${WCATTR.Height}, 100%);

        display: inline;
      }

      img {
        width: var(--wc-image-width);
        height: var(--wc-image-height);
        border-radius: var(--wc-image-border-radius);
        object-fit: cover;
        object-position: center;
      }
    </style>

    <img />
  </template>
`;

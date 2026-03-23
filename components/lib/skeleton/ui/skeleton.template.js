import { SHAPE, WCATTR } from '../../../consts/index.js';
import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      :host {
        --wc-skeleton-width: var(--${WCATTR.Width});
        --wc-skeleton-height: var(--${WCATTR.Height});
        --wc-skeleton-bg-color: light-dark(#ebeae8, #535353);

        display: contents;
      }

      div {
        width: var(--wc-skeleton-width);
        height: var(--wc-skeleton-height, 1em);
        background: var(--wc-skeleton-bg-color);
        animation-name: skeleton-pulsate;
        animation-duration: 1.2s;
        animation-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
        animation-iteration-count: infinite;
      }

      :host([${WCATTR.Shape}='${SHAPE.Squircle}']) div {
        border-radius: 0.3em;
      }

      :host([${WCATTR.Shape}='${SHAPE.Circle}']) div {
        border-radius: 50%;
        height: var(--wc-skeleton-width);
      }

      @keyframes skeleton-pulsate {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }
    </style>

    <div></div>
  </template>
`;

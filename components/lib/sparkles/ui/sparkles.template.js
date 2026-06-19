import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      :host {
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 1;
        background: transparent;
      }

      .sparkles-symbol {
        position: absolute;
        color: #fff;
        font-size: var(--symbol-size, 1rem);
        opacity: 0;
        animation: sparkle 5s infinite;
        animation-delay: var(--duration-shift, 0s);
        transform: translate(0, 0) scale(1);
        will-change: transform, opacity;
        user-select: none;
        z-index: -1;
      }

      @keyframes sparkle {
        0% {
          transform: translate(0, 0);
          opacity: 0;
        }
        15% {
          opacity: 1;
        }
        100% {
          transform: translate(var(--shift-x), var(--shift-y));
          opacity: 0;
        }
      }
    </style>

    <div></div>
  </template>
`;

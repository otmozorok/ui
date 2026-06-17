import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      :host {
        position: absolute;
        inset: 0;
        pointer-events: none;
      }

      .ripple-wave {
        pointer-events: none;
        position: absolute;
        transform: scale(0);
        display: block;
        border-radius: 50%;
        background-color: var(--ripple-color, rgba(0, 0, 0, 0.08));
        animation: ripple-animation 0.7s ease-out forwards;
        will-change: transform, opacity;
      }

      @keyframes ripple-animation {
        from {
          transform: scale(0);
          opacity: 1;
        }

        50% {
          opacity: 1;
        }

        to {
          transform: scale(2);
          opacity: 0;
        }
      }
    </style>
  </template>
`;

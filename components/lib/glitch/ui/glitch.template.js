import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      span {
        position: relative;
      }
      span::before,
      span::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: inherit;
      }
      span::before {
        left: 2px;
        text-shadow: -2px 0 blue;
        animation: glitch-before 0.25s infinite;
      }
      span::after {
        left: -2px;
        text-shadow: 2px 0 red;
        animation: glitch-after 0.25s infinite;
      }

      @keyframes glitch-before {
        0%,
        100% {
          clip-path: polygon(0 0, 100% 0, 100% 25%, 0 25%);
        }
        25% {
          clip-path: polygon(0 25%, 100% 25%, 100% 50%, 0 50%);
        }
        50% {
          clip-path: polygon(0 50%, 100% 50%, 100% 75%, 0 75%);
        }
        75% {
          clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%);
        }
      }

      @keyframes glitch-after {
        0%,
        100% {
          clip-path: polygon(0 25%, 100% 25%, 100% 50%, 0 50%);
        }
        25% {
          clip-path: polygon(0 50%, 100% 50%, 100% 75%, 0 75%);
        }
        50% {
          clip-path: polygon(0 0, 100% 0, 100% 25%, 0 25%);
        }
        75% {
          clip-path: polygon(0 75%, 100% 75%, 100% 100%, 0 100%);
        }
      }
    </style>

    <span>
      <slot />
    </span>
  </template>
`;

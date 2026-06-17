import { APPEARANCE, WCATTR } from '../../../consts/index.js';
import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      div {
        position: relative;
        background-repeat: no-repeat;
        background-size: contain;
        background-position:
          95% center,
          center center;
        padding: 1rem;
        border-radius: 1.25rem;
        background-image: var(--image);
        overflow: hidden;
      }

      button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        display: grid;
        place-items: center;
        width: 2.25rem;
        height: 2.25rem;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background: transparent;
        cursor: pointer;
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Themed}']) {
        --wc-bg-themed: var(--bg-secondary-color);
        --wc-button-bg-themed-hover: light-dark(
          hsl(from var(--bg-secondary-color) h s calc(l - 15)),
          hsl(from var(--bg-secondary-color) h s calc(l + 15))
        );

        div {
          background-color: var(--wc-bg-themed);
        }

        button {
          &:hover {
            background-color: var(--wc-button-bg-themed-hover);
          }
        }
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Negative}']) {
        --wc-bg-negative: var(--negative);
        --wc-button-bg-negative-hover: light-dark(
          hsl(from var(--negative) h s calc(l - 15)),
          hsl(from var(--negative) h s calc(l + 15))
        );

        div {
          background-color: var(--wc-bg-negative);
        }

        button {
          &:hover {
            background-color: var(--wc-button-bg-negative-hover);
          }
        }
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Neutral}']) {
        --wc-bg-neutral: var(--neutral);
        --wc-button-bg-neutral-hover: light-dark(
          hsl(from var(--neutral) h s calc(l + 15)),
          hsl(from var(--neutral) h s calc(l - 15))
        );

        div {
          background-color: var(--wc-bg-neutral);
          color: var(--text-button-inverse-color);
        }

        button {
          color: var(--text-button-inverse-color);
          &:hover {
            background-color: var(--wc-button-bg-neutral-hover);
          }
        }
      }

      :host(:not([${WCATTR.Closable}])) {
        button {
          display: none;
        }
      }
    </style>

    <div>
      <slot></slot>
      <button><wc-icon name="x" size-number="1.5"></wc-icon></button>
    </div>
  </template>
`;

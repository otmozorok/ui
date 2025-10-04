import { APPEARANCE, WCATTR } from '../../consts/index.js';
import { html } from '../../utils/index.js';

export default html`
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
        div {
          background-color: var(--bg-secondary-color);
        }

        button {
          &:hover {
            background: light-dark(
              hsl(from var(--bg-secondary-color) h s calc(l - 15)),
              hsl(from var(--bg-secondary-color) h s calc(l + 15))
            );
          }
        }
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Negative}']) {
        div {
          background-color: var(--negative);
        }

        button {
          &:hover {
            background: light-dark(
              hsl(from var(--negative) h s calc(l - 15)),
              hsl(from var(--negative) h s calc(l + 15))
            );
          }
        }
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Neutral}']) {
        div {
          background-color: var(--neutral);
          color: var(--text-button-inverse-color);
        }

        button {
          color: var(--text-button-inverse-color);
          &:hover {
            background: light-dark(
              hsl(from var(--neutral) h s calc(l + 15)),
              hsl(from var(--neutral) h s calc(l - 15))
            );
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
      <button><wc-icon name="x"></wc-icon></button>
    </div>
  </template>
`;

import { APPEARANCE, MODE, SIZE, WCATTR } from '../../consts/index.js';
import { html } from '../../utils/index.js';

export default html`
  <template>
    <style>
      button {
        align-items: center;
        border: 0;
        box-sizing: border-box;
        cursor: pointer;
        display: flex;
        justify-content: center;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        gap: 0.375rem;
        font-family: var(--font-family);
        line-height: 1;

        & > wc-loader {
          opacity: 0;
          position: absolute;
          height: 20px;
          width: 20px;
        }
      }

      span {
        line-height: 1;
      }

      :host([${WCATTR.Loading}]) span {
        opacity: 0;
      }

      :host([${WCATTR.Loading}]) wc-loader {
        opacity: 1;
      }

      :host([${WCATTR.Size}='${SIZE.Small}']) button {
        padding: 0 0.75rem;
        border-radius: 10px;
        height: 28px;
        min-width: 28px;
        font-size: 0.875rem;
        font-weight: 500;
      }

      :host([${WCATTR.Size}='${SIZE.Medium}']) button {
        padding: 0 0.75rem;
        border-radius: 0.75rem;
        height: 40px;
        min-width: 40px;
        font-size: 1rem;
        font-weight: 500;
      }

      :host([${WCATTR.Size}='${SIZE.Large}']) button {
        padding: 0 1.25rem;
        border-radius: 1rem;
        height: 52px;
        min-width: 52px;
        font-size: 1.0625rem;
        font-weight: 600;
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Themed}'][${WCATTR.Mode}='${MODE.Primary}'])
        button {
        background-color: var(--primary);
        color: var(--text-button-color);

        &:hover {
          background-color: hsl(from var(--primary) h s calc(l + 14));
        }
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Negative}'][${WCATTR.Mode}='${MODE.Primary}'])
        button {
        background-color: var(--negative);
        color: var(--text-button-color);

        &:hover {
          background-color: light-dark(
            hsl(from var(--negative) h calc(s + 30) calc(l + 10)),
            hsl(from var(--negative) h calc(s + 30) calc(l - 10))
          );
        }
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Neutral}'][${WCATTR.Mode}='${MODE.Primary}'])
        button {
        background-color: var(--neutral);
        color: var(--text-button-inverse-color);

        &:hover {
          background-color: light-dark(
            hsl(from var(--neutral) h s calc(l + 11)),
            hsl(from var(--neutral) h s calc(l - 11))
          );
        }
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Themed}'][${WCATTR.Mode}='${MODE.Link}']) button {
        background-color: transparent;
        color: var(--primary);
        padding: 0;

        &:hover {
          color: hsl(from var(--primary) h s calc(l + 14));
        }
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Negative}'][${WCATTR.Mode}='${MODE.Link}']) button {
        background-color: transparent;
        color: var(--negative);
        padding: 0;

        &:hover {
          color: hsl(from var(--negative) h calc(s + 30) calc(l + 10));
        }
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Neutral}'][${WCATTR.Mode}='${MODE.Link}']) button {
        background-color: transparent;
        color: var(--neutral);
        padding: 0;

        &:hover {
          color: light-dark(
            hsl(from var(--neutral) h s calc(l + 27)),
            hsl(from var(--neutral) h s calc(l - 27))
          );
        }
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Themed}'][${WCATTR.Mode}='${MODE.Secondary}'])
        button {
        background-color: var(--secondary);
        color: var(--primary);

        &:hover {
          background-color: hsla(from var(--secondary) h s l / 0.14);
        }
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Negative}'][${WCATTR.Mode}='${MODE.Secondary}'])
        button {
        background-color: var(--secondary);
        color: var(--negative);

        &:hover {
          background-color: hsla(from var(--secondary) h s l / 0.14);
        }
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Neutral}'][${WCATTR.Mode}='${MODE.Secondary}'])
        button {
        background-color: var(--secondary);
        color: var(--neutral);

        &:hover {
          background-color: hsla(from var(--secondary) h s l / 0.14);
        }
      }

      :host([${WCATTR.FullWidth}]) button {
        width: 100%;
      }

      :host {
        display: contents;
      }
    </style>

    <button>
      <wc-loader></wc-loader>
      <span>
        <slot></slot>
      </span>
      <slot name="after"></slot>
    </button>
  </template>
`;

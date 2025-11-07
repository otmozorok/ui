import { APPEARANCE, WCATTR } from '../../../consts/index.js';
import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      :host {
        line-height: 1.3;
      }

      :host div {
        display: grid;
        place-items: center;
        background: var(--bg-radio-color);
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
      }

      :host span {
        display: none;
        place-items: center;
        background: var(--bg-radio-toggle-color);
        width: 0.3125rem;
        height: 0.3125rem;
        border-radius: 50%;
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Negative}']) div {
        box-shadow:
          0 0 0.3rem var(--negative),
          0 0 0.2rem var(--negative),
          0 0 0.1rem var(--negative);
      }

      :host([${WCATTR.Checked}]) div {
        box-shadow: none;

        & span {
          display: grid;
        }
      }

      :host([${WCATTR.Checked}][${WCATTR.Appearance}='${APPEARANCE.Themed}']) div {
        background: var(--primary);
      }

      :host([${WCATTR.Checked}][${WCATTR.Appearance}='${APPEARANCE.Negative}']) div {
        background: var(--negative);
      }

      :host([${WCATTR.Checked}][${WCATTR.Appearance}='${APPEARANCE.Neutral}']) div {
        background: var(--neutral);

        & span {
          background: var(--bg-radio-toggle-inverse-color);
        }
      }
    </style>

    <wc-flex gap="1">
      <input type="radio" hidden />
      <div>
        <span></span>
      </div>
      <wc-flex direction="vertical" gap="0">
        <slot></slot>
        <slot name="description"></slot>
      </wc-flex>
    </wc-flex>
  </template>
`;

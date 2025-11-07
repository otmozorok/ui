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
        background: var(--bg-switcher-color);
        width: 4.125rem;
        height: 2.25rem;
        border-radius: 1.25rem;
        justify-content: start;
        padding: 0.125rem;
        box-sizing: border-box;
      }

      :host span {
        display: grid;
        place-items: center;
        background: var(--bg-switcher-toggle-color);
        width: 2rem;
        height: 2rem;
        border-radius: 1.25rem;
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Negative}']) span {
        box-shadow:
          0 0 0.3rem var(--negative),
          0 0 0.2rem var(--negative),
          0 0 0.1rem var(--negative);
      }

      :host([${WCATTR.Checked}]) span {
        background: var(--bg-switcher-toggle-checked-color);
        box-shadow: none;
      }

      :host([${WCATTR.Checked}][${WCATTR.Appearance}='${APPEARANCE.Themed}']) div {
        justify-content: end;
        background: var(--primary);
      }

      :host([${WCATTR.Checked}][${WCATTR.Appearance}='${APPEARANCE.Negative}']) div {
        justify-content: end;
        background: var(--negative);
      }

      :host([${WCATTR.Checked}][${WCATTR.Appearance}='${APPEARANCE.Neutral}']) div {
        justify-content: end;
        background: var(--neutral);

        & span {
          background: var(--bg-switcher-toggle-inverse-color);
        }
      }
    </style>

    <wc-flex gap="1" align-items="center">
      <input type="checkbox" hidden />
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

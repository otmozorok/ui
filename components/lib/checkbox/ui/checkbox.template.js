import { APPEARANCE, ICON, WCATTR, WCTAG } from '../../../consts/index.js';
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
        background: var(--bg-checkbox-color);
        color: var(--text-checkbox-color);
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 0.35rem;

        & ${WCTAG.Icon} {
          display: none;
        }
      }

      :host([${WCATTR.Appearance}='${APPEARANCE.Negative}']) div {
        box-shadow:
          0 0 0.3rem var(--negative),
          0 0 0.2rem var(--negative),
          0 0 0.1rem var(--negative);
      }

      :host([${WCATTR.Checked}]) div {
        box-shadow: none;
      }

      :host([${WCATTR.Indeterminate}]) div {
        box-shadow: none;
      }

      :host([${WCATTR.Indeterminate}][${WCATTR.Appearance}='${APPEARANCE.Themed}']) div {
        background: var(--primary);

        & ${WCTAG.Icon}[${WCATTR.Name}='${ICON.Minus}'] {
          display: inline-grid;
        }

        & ${WCTAG.Icon}[${WCATTR.Name}='${ICON.Check}'] {
          display: none;
        }
      }

      :host([${WCATTR.Indeterminate}][${WCATTR.Appearance}='${APPEARANCE.Negative}']) div {
        background: var(--negative);

        & ${WCTAG.Icon}[${WCATTR.Name}='${ICON.Minus}'] {
          display: inline-grid;
        }

        & ${WCTAG.Icon}[${WCATTR.Name}='${ICON.Check}'] {
          display: none;
        }
      }

      :host([${WCATTR.Indeterminate}][${WCATTR.Appearance}='${APPEARANCE.Neutral}']) div {
        background: var(--neutral);
        color: var(--text-checkbox-inverse-color);

        & ${WCTAG.Icon}[${WCATTR.Name}='${ICON.Minus}'] {
          display: inline-grid;
        }

        & ${WCTAG.Icon}[${WCATTR.Name}='${ICON.Check}'] {
          display: none;
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
        color: var(--text-checkbox-inverse-color);
      }

      :host([${WCATTR.Checked}]) ${WCTAG.Icon}[${WCATTR.Name}='${ICON.Check}'] {
        display: inline-grid;
      }
    </style>

    <wc-flex gap="1">
      <input type="checkbox" hidden />
      <div>
        <wc-icon name="check" size-number="1.125"></wc-icon>
        <wc-icon name="minus" size-number="1.125"></wc-icon>
      </div>
      <wc-flex direction="vertical" gap="0">
        <slot></slot>
        <slot name="description"></slot>
      </wc-flex>
    </wc-flex>
  </template>
`;

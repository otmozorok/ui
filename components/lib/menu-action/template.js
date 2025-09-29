import { WCATTR } from '../../consts/index.js';
import { html } from '../../utils/index.js';

export default html`
  <template>
    <style>
      button {
        background: unset;
        border: unset;
        font-family: inherit;
        line-height: unset;
        overflow: hidden;
        padding: 0.5rem 1rem;
        position: relative;
        text-align: unset;
        text-decoration: none;
        min-height: 56px;
        cursor: pointer;
        align-items: center;
        box-sizing: border-box;
        display: flex;
        width: 100%;

        &:hover {
          background-color: hsla(var(--text-color-hsl), 0.04);
        }
      }

      .action {
        color: var(--primary);
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        flex-grow: 1;
        font-weight: 500;
        line-height: 1;
        min-width: 0;
      }

      slot[name='before']::slotted(*) {
        color: var(--primary);
        align-items: center;
        display: flex;
        justify-content: center;
        margin-right: 0.75rem;
        min-height: 40px;
        min-width: 40px;
        line-height: 1;
      }

      .arrow {
        display: none;
        color: hsla(var(--text-color-hsl), 0.3);
        margin-left: 0.375rem;
      }

      :host([${WCATTR.Arrow}]) .arrow {
        display: grid;
      }

      :host([${WCATTR.Compact}]) button {
        min-height: 48px;
        padding: 0.25rem 0.75rem;
      }

      :host([${WCATTR.Negative}]) .action {
        color: var(--text-negative);
      }

      :host([${WCATTR.Negative}]) slot[name='before']::slotted(*) {
        color: var(--text-negative);
      }
    </style>

    <button>
      <slot name="before"></slot>
      <span class="action">
        <slot></slot>
      </span>
      <slot name="after"></slot>
      <wc-icon class="arrow" name="chevron-right" size="16"></wc-icon>
    </button>
  </template>
`;

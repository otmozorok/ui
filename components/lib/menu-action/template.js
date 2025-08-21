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
        padding: 8px 12px;
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
        margin-right: 12px;
        min-height: 40px;
        min-width: 40px;
        line-height: 1;
      }

      .arrow {
        display: none;
        color: hsla(var(--text-color-hsl), 0.3);
        margin-left: 6px;
      }

      :host([arrow]) .arrow {
        display: grid;
      }

      :host([compact]) button {
        min-height: 48px;
        padding: 4px 12px;
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

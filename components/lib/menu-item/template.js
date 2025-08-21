import { WCATTR } from '../../consts/index.js';
import { html } from '../../utils/index.js';

export default html`
  <template>
    <style>
      div {
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
        align-items: center;
        box-sizing: border-box;
        display: flex;
        width: 100%;
      }

      .action {
        color: var(--text-color);
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1;
        min-width: 0;
      }

      slot[name='before']::slotted(*) {
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

      :host([${WCATTR.Arrow}]) .arrow {
        display: grid;
      }

      :host([${WCATTR.Compact}]) div {
        min-height: 48px;
        padding: 4px 12px;
      }
    </style>

    <div>
      <slot name="before"></slot>
      <span class="action">
        <slot></slot>
      </span>
      <slot name="after"></slot>
      <wc-icon class="arrow" name="chevron-right" size="16"></wc-icon>
    </div>
  </template>
`;

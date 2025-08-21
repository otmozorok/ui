import { WCATTR } from '../../consts/index.js';
import { html } from '../../utils/index.js';

export default html`
  <template>
    <style>
      :host([${WCATTR.Island}]) {
        .menu {
          padding: 0 12px;
        }

        .content {
          border-radius: 16px;
          overflow: hidden;
        }
      }

      :host([${WCATTR.Filled}]) .content {
        background-color: var(--bg-secondary-color);
      }
    </style>

    <div class="menu">
      <slot name="header"></slot>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </template>
`;

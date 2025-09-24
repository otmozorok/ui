import { WCATTR } from '../../consts/index.js';
import { html } from '../../utils/index.js';

export default html`
  <template>
    <style>
      :host([${WCATTR.Island}]) {
        .menu {
          padding: 0 1rem;
        }

        .content {
          border-radius: 1rem;
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

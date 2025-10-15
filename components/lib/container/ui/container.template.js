import { WCATTR } from '../../../consts/index.js';
import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      .content {
        padding: 1rem;
      }

      :host([${WCATTR.Island}]) {
        .container {
          padding: 0 1rem;
        }
      }

      :host([${WCATTR.Filled}][${WCATTR.Island}]) .content {
        border-radius: 1rem;
        overflow: hidden;
      }

      :host([${WCATTR.Filled}]) .content {
        background-color: var(--bg-secondary-color);
      }

      :host([${WCATTR.FullWidth}]) .container {
        padding: 0;
      }

      header {
        padding: 0 1rem;
      }
    </style>

    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </template>
`;

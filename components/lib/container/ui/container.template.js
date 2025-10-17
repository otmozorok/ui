import { WCATTR } from '../../../consts/index.js';
import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      .content {
        padding: 1rem;
      }

      :host([${WCATTR.Island}]) section {
        padding: 0 1rem;
      }

      :host([${WCATTR.FullWidth}]) section {
        padding: 0;
      }

      :host([${WCATTR.Filled}][${WCATTR.Island}]) .content {
        border-radius: 1rem;
        overflow: hidden;
      }

      :host([${WCATTR.Filled}]) .content {
        background-color: var(--bg-secondary-color);
      }

      header {
        padding: 0 1rem;
      }
    </style>

    <section>
      <header>
        <slot name="header"></slot>
      </header>
      <div class="content">
        <slot></slot>
      </div>
    </section>
  </template>
`;

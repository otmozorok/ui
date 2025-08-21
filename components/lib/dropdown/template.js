import { WCATTR } from '../../consts/index.js';
import { html } from '../../utils/index.js';

export default html`
  <template>
    <style>
      slot[name='trigger']::sloted(*) {
        position: relative;
        display: flex;
        anchor-name: --dropdown;
      }

      .dropdown {
        display: none;
        position: absolute;
        border-radius: 16px;
        font-weight: 500;
        view-transition-name: --dropdown;
        position-anchor: --dropdown;
        box-shadow: var(--shadow);
        z-index: var(--z-tooltip);
        width: 250px;
        overflow: hidden;
      }

      :host([${WCATTR.Open}]) .dropdown {
        display: block;
        position-area: bottom span-right;
        margin-top: 5px;
      }
    </style>

    <slot name="trigger"><wc-icon name="circle-help"></wc-icon></slot>
    <div class="dropdown">
      <slot></slot>
    </div>
  </template>
`;

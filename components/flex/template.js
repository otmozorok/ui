import { DIRECTION, html, WCATTR } from '../.shared/index.js';

export default html`
  <template>
    <style>
      :host {
        --gap: attr(${WCATTR.Gap} rem);
      }

      :host([${WCATTR.Direction}='${DIRECTION.Horizontal}']) {
        div {
          flex-direction: row;
        }
      }

      :host([${WCATTR.Direction}='${DIRECTION.Vertical}']) {
        div {
          flex-direction: column;
        }
      }

      div {
        display: flex;
        gap: var(--gap);
      }
    </style>

    <div>
      <slot></slot>
    </div>
  </template>
`;

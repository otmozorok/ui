import { ALIGNITEM, DIRECTION, WCATTR } from '../../consts/index.js';
import { html } from '../../utils/index.js';

export default html`
  <template>
    <style>
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

      :host([${WCATTR.AlignItems}='${ALIGNITEM.Start}']) {
        div {
          align-items: start;
        }
      }

      :host([${WCATTR.AlignItems}='${ALIGNITEM.End}']) {
        div {
          align-items: end;
        }
      }

      :host([${WCATTR.AlignItems}='${ALIGNITEM.Center}']) {
        div {
          align-items: center;
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

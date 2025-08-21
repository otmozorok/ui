import { COL, WCATTR } from '../../consts/index.js';
import { html } from '../../utils/index.js';

export default html`
  <template>
    <style>
      :host {
        --cols: 0;
        --rows: 0;
        --gap: attr(${WCATTR.Gap} rem);
      }

      :host([${WCATTR.Cols}='${COL.One}']) {
        --cols: ${COL.One};
      }

      :host([${WCATTR.Cols}='${COL.Two}']) {
        --cols: ${COL.Two};
      }

      :host([${WCATTR.Cols}='${COL.Three}']) {
        --cols: ${COL.Three};
      }

      :host([${WCATTR.Cols}='${COL.Four}']) {
        --cols: ${COL.Four};
      }

      :host([${WCATTR.Cols}='${COL.Six}']) {
        --cols: ${COL.Six};
      }

      :host([${WCATTR.Cols}='${COL.Twelve}']) {
        --cols: ${COL.Twelve};
      }

      :host([${WCATTR.Rows}='${COL.One}']) {
        --rows: ${COL.One};
      }

      :host([${WCATTR.Rows}='${COL.Two}']) {
        --rows: ${COL.Two};
      }

      :host([${WCATTR.Rows}='${COL.Three}']) {
        --rows: ${COL.Three};
      }

      :host([${WCATTR.Rows}='${COL.Four}']) {
        --rows: ${COL.Four};
      }

      :host([${WCATTR.Rows}='${COL.Six}']) {
        --rows: ${COL.Six};
      }

      :host([${WCATTR.Rows}='${COL.Twelve}']) {
        --rows: ${COL.Twelve};
      }

      div {
        display: grid;
        grid-template-columns: repeat(var(--cols), minmax(0, 1fr));
        grid-template-rows: repeat(var(--rows), minmax(0, 1fr));
        gap: var(--gap);
      }
    </style>

    <div>
      <slot></slot>
    </div>
  </template>
`;

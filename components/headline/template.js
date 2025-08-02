import { html, SIZE, WCATTR } from '../.shared/index.js';

export default html`
  <template>
    <style>
      h1 {
        margin: 0;
        padding: 0;
        font-weight: 600;
      }

      :host([${WCATTR.Size}='${SIZE.Large}']) h1 {
        font-size: 2rem;
      }

      :host([${WCATTR.Size}='${SIZE.Medium}']) h1 {
        font-size: 1.5625rem;
      }

      :host([${WCATTR.Size}='${SIZE.Small}']) h1 {
        font-size: 1.125rem;
      }
    </style>

    <h1>
      <slot></slot>
    </h1>
  </template>
`;

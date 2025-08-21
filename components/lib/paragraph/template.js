import { html } from '../../utils/index.js';

export default html`
  <template>
    <style>
      p {
        margin: 0;
        padding: 0;
      }
    </style>

    <p>
      <slot></slot>
    </p>
  </template>
`;

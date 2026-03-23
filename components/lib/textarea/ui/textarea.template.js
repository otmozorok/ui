import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      :host {
        display: grid;
        position: relative;
      }

      button {
        display: grid;
        place-items: center;
        position: absolute;
        right: 0.6875rem;
        top: 0.6875rem;
        width: 1.25rem;
        height: 1.25rem;
        padding: 0;
        border-radius: 50%;
        border: none;
      }

      textarea {
        resize: none;
        background: var(--bg-field-color);
        padding: 0.6875rem 1.5rem 0.6875rem 1rem;
        border-radius: 0.75rem;
        border: none;
        outline: none;
        margin: 0;
        font-size: 1rem;
      }
    </style>

    <textarea rows="3"></textarea>
    <button><wc-icon size-number="0.75" name="x"></wc-icon></button>
  </template>
`;

import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      dialog::backdrop {
        background-color: lch(from var(--bg-color) l c h / 0.7);
        backdrop-filter: blur(0.2rem);
      }

      dialog {
        position: relative;
        border-radius: 1rem;
        border: none;
        background: var(--bg-secondary-color);
        width: min-content;
        overflow: visible;
        padding: 0;
      }

      header,
      main,
      footer {
        padding: 1rem;
      }

      button[part='close'] {
        display: grid;
        position: absolute;
        right: -2rem;
        top: 0rem;
        background: none;
        border: none;
        padding: 0;
      }
    </style>

    <button popovertarget="dialog">
      <slot></slot>
    </button>

    <dialog id="dialog" popover>
      <header part="header">
        <slot name="header"></slot>
      </header>
      <main part="content">
        <slot name="content"></slot>
      </main>
      <footer part="footer">
        <slot name="footer"></slot>
      </footer>
      <button part="close" popovertarget="dialog" popovertargetaction="hide">
        <wc-icon name="x"></wc-icon>
      </button>
    </dialog>
  </template>
`;

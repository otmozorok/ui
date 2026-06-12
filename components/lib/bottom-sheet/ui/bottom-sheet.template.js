import { SIZE_BOTTOM_SHEET, WCATTR } from '../../../consts/index.js';
import { html } from '../../../utils/index.js';

export const template = html`
  <template>
    <style>
      :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
        font-family:
          system-ui,
          -apple-system,
          'Segoe UI',
          Roboto,
          sans-serif;
      }

      :host([${WCATTR.Open}]) {
        pointer-events: auto;
      }

      .backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        transition: background-color 0.3s ease;
        pointer-events: none;
      }

      :host([${WCATTR.Open}]) .backdrop {
        background-color: rgba(0, 0, 0, 0.5);
        pointer-events: auto;
      }

      .sheet {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background: var(--bg-secondary-color);
        border-radius: 20px 20px 0 0;
        box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
        transform: translateY(100%);
        transition:
          transform 0.3s cubic-bezier(0.32, 0.72, 0, 1),
          height 0.3s ease;
        display: flex;
        flex-direction: column;
        will-change: transform, height;
        max-height: 100vh;
      }

      :host([${WCATTR.Size}='${SIZE_BOTTOM_SHEET.Full}']) .sheet {
        height: 100vh;
      }

      :host([${WCATTR.Size}='${SIZE_BOTTOM_SHEET.Content}']) .sheet {
        height: auto;
        min-height: 100px;
      }

      :host([${WCATTR.Size}='${SIZE_BOTTOM_SHEET.Half}']) .sheet {
        height: 50%;
      }

      :host([${WCATTR.Open}]) .sheet {
        transform: translateY(0);
      }

      :host([${WCATTR.Open}][${WCATTR.Size}='${SIZE_BOTTOM_SHEET.Full}']) .sheet {
        transform: translateY(1rem);
      }

      .sheet.dragging {
        transition: none;
      }

      .handle-container {
        padding: 12px 0;
        display: flex;
        justify-content: center;
        cursor: grab;
        touch-action: none;
        user-select: none;
        background: var(--bg-secondary-color);
        border-radius: 20px 20px 0 0;
        position: relative;
        z-index: 2;
      }

      .handle-container:active {
        cursor: grabbing;
      }

      .handle {
        width: 40px;
        height: 5px;
        background: #ddd;
        border-radius: 10px;
      }

      .content {
        overflow-y: auto;
        padding: 16px;
        flex: 1;
        -webkit-overflow-scrolling: touch;
        scroll-behavior: smooth;
      }

      .content::-webkit-scrollbar {
        width: 6px;
      }

      .content::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      .content::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 3px;
      }

      .content::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
    </style>

    <dialog class="sheet size-half" part="sheet" popover>
      <div class="handle-container" part="handle-container">
        <div class="handle" part="handle"></div>
      </div>
      <div class="content" part="content">
        <slot></slot>
      </div>
    </dialog>
  </template>
`;

import { COLOR, SHAPE, WCATTR } from '../../consts/index.js';
import { html } from '../../utils/index.js';

export default html`
  <template>
    <style>
      :host {
        display: contents;
      }

      ::slotted(img) {
        width: calc(var(--${WCATTR.SizeNumber}) + 2px);
        height: calc(var(--${WCATTR.SizeNumber}) + 2px);
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
        position: absolute;
        inset: -1px;
      }

      .wrapper {
        display: grid;
        width: var(--${WCATTR.SizeNumber});
        height: var(--${WCATTR.SizeNumber});

        .text {
          font-size: 1rem;
          line-height: 1;
          user-select: none;
          color: var(--text-avatar-color);
        }
      }

      .bg {
        position: relative;
        display: grid;
        place-items: center;
      }

      :host([${WCATTR.Color}='${COLOR.Red}']) .bg {
        background-image: var(--gradient-red);
      }

      :host([${WCATTR.Color}='${COLOR.Green}']) .bg {
        background-image: var(--gradient-green);
      }

      :host([${WCATTR.Color}='${COLOR.Orange}']) .bg {
        background-image: var(--gradient-orange);
      }

      :host([${WCATTR.Color}='${COLOR.Blue}']) .bg {
        background-image: var(--gradient-blue);
      }

      :host([${WCATTR.Color}='${COLOR.Purple}']) .bg {
        background-image: var(--gradient-purple);
      }

      :host([${WCATTR.Shape}='${SHAPE.Circle}']) .bg {
        border-radius: 50%;
      }

      :host([${WCATTR.Shape}='${SHAPE.Squircle}']) .bg {
        mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTI4IDBDNC45NDIgMCAwIDQuOTQyIDAgMjhjMCAyMy4wNDYgNC45MzcgMjcuOTk1IDI3Ljk2NSAyOGguMDdjMjMuMDE2LS4wMDUgMjcuOTYtNC45NDkgMjcuOTY1LTI3Ljk2NXYtLjA3QzU1Ljk5NSA0LjkzNyA1MS4wNDYgMCAyOCAwIi8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTAgMjhDMCA0Ljk0MiA0Ljk0MiAwIDI4IDBzMjggNC45NDIgMjggMjgtNC45NDIgMjgtMjggMjhTMCA1MS4wNTggMCAyOCIvPjwvc3ZnPg==);
        mask-position: center;
        mask-repeat: no-repeat;
        mask-size: contain;
        mask-type: alpha;
      }
    </style>

    <span class="wrapper">
      <span class="bg">
        <span class="text">
          <slot><wc-icon name="user-round"></wc-icon></slot>
        </span>
      </span>
    </span>
  </template>
`;

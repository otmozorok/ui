import { COLOR, html, SHAPE } from '../.shared/index.js';

export default html`
  <template>
    <style>
      .wrapper {
        display: grid;

        img {
          height: 100%;
          object-fit: cover;
          object-position: center;
          width: 100%;
        }

        .text {
          font-size: 1rem;
          line-height: 1;
          user-select: none;
          color: var(--text-avatar-color);
        }
      }

      .bg {
        display: grid;
        place-content: center;
      }

      .hide {
        display: none;
      }

      :host([color='${COLOR.Red}']) .bg {
        background-image: var(--gradient-red);
      }

      :host([color='${COLOR.Green}']) .bg {
        background-image: var(--gradient-green);
      }

      :host([color='${COLOR.Orange}']) .bg {
        background-image: var(--gradient-orange);
      }

      :host([color='${COLOR.Blue}']) .bg {
        background-image: var(--gradient-blue);
      }

      :host([color='${COLOR.Purple}']) .bg {
        background-image: var(--gradient-purple);
      }

      :host([shape='${SHAPE.Circle}']) .wrapper {
        border-radius: 50%;
        overflow: hidden;
      }

      :host([shape='${SHAPE.Squircle}']) .wrapper {
        mask-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI1NiIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTI4IDBDNC45NDIgMCAwIDQuOTQyIDAgMjhjMCAyMy4wNDYgNC45MzcgMjcuOTk1IDI3Ljk2NSAyOGguMDdjMjMuMDE2LS4wMDUgMjcuOTYtNC45NDkgMjcuOTY1LTI3Ljk2NXYtLjA3QzU1Ljk5NSA0LjkzNyA1MS4wNDYgMCAyOCAwIi8+PHBhdGggZmlsbD0iIzAwMCIgZD0iTTAgMjhDMCA0Ljk0MiA0Ljk0MiAwIDI4IDBzMjggNC45NDIgMjggMjgtNC45NDIgMjgtMjggMjhTMCA1MS4wNTggMCAyOCIvPjwvc3ZnPg==);
        mask-position: center;
        mask-repeat: no-repeat;
        mask-size: contain;
        mask-type: alpha;
      }
    </style>

    <span class="wrapper">
      <img />
      <span class="bg">
        <span class="text">
          <slot><wc-icon name="user-round" size="21"></wc-icon></slot>
        </span>
      </span>
    </span>
  </template>
`;

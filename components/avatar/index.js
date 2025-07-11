import { COLOR, COLORS, WebComponent } from '../.shared/index.js';

export class AvatarComponent extends WebComponent {
  static observedAttributes = ['src', 'color', 'size'];

  constructor() {
    super();

    this.shadowRoot.innerHTML = /* html*/ `
    <style>
        .wrapper {
            display: grid;
            border-radius: 50%;
            overflow: hidden;

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
                color: var(--text-color)
            }
        }

        .bg {
            display: grid;
            place-content: center;

            &.red {
                background-image: var(--gradient-red);
            }

            &.green {
                background-image: var(--gradient-green);
            }

            &.orange {
                background-image: var(--gradient-orange);
            }

            &.blue {
                background-image: var(--gradient-blue);
            }

            &.purple {
                background-image: var(--gradient-purple);
            }
        }

        .hide {
          display: none;
        }
    </style>

    <span class="wrapper">
        <img />
        <span class="bg">
            <span class="text">
                <slot>😎</slot>
            </span>
        </span>
    </span>
    `;

    this.$wrapper = this.shadowRoot.querySelector('.wrapper');
    this.$img = this.shadowRoot.querySelector('img');
    this.$bg = this.shadowRoot.querySelector('.bg');

    this.size = 48;
    this.src = '';
    this.color = COLOR.Green;
  }

  get src() {
    return this.getAttribute('src');
  }

  set src(val) {
    if (val) {
      this.$img.src = val;
      this.$img.classList.remove('hide');
      this.$bg.classList.add('hide');
    } else {
      this.$img.classList.add('hide');
      this.$bg.classList.remove('hide');
    }
  }

  /**
   * @param {COLOR} val
   */
  set color(val) {
    switch (val) {
      case COLOR.Blue:
      case COLOR.Green:
      case COLOR.Orange:
      case COLOR.Purple:
      case COLOR.Red:
        this.$bg.classList.remove(...COLORS);
        this.$bg.classList.add(val);
        break;

      default:
        break;
    }
  }

  /** @param {number} val */
  set size(val) {
    if (val) {
      this.$wrapper.style.width = `${val}px`;
      this.$wrapper.style.height = `${val}px`;
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'color') {
      switch (newValue) {
        case COLOR.Blue:
        case COLOR.Green:
        case COLOR.Orange:
        case COLOR.Purple:
        case COLOR.Red:
          this.color = newValue;
          break;
      }
    }

    if (name === 'size' && newValue) {
      this.size = newValue;
    }

    if (name === 'src') {
      this.src = newValue;
    }
  }
}

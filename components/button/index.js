import {
  APPEARANCE,
  APPEARANCES,
  MODE,
  MODES,
  SIZE,
  SIZES,
  WCATTR,
  WebComponent,
} from '../.shared/index.js';
import template from './template.js';

/**
 * Button
 * @docs https://otmozorok.github.io/ui/?path=/docs/components-button--docs
 */
export class ButtonComponent extends WebComponent {
  static observedAttributes = [WCATTR.Mode, WCATTR.Size, WCATTR.Loading];

  constructor() {
    super(template);

    this.$button = this.shadowRoot.querySelector('button');
    this.$loader = this.shadowRoot.querySelector('wc-loader');
    this.$span = this.shadowRoot.querySelector('span');
  }

  get mode() {
    return this.getAttribute(WCATTR.Mode);
  }

  set mode(val) {
    if (MODES.includes(val)) {
      this.setAttribute(WCATTR.Mode, val);
    }
  }

  get size() {
    return this.getAttribute(WCATTR.Size);
  }

  set size(val) {
    if (SIZES.includes(val)) {
      this.setAttribute(WCATTR.Size, val);
    }
  }

  get appearance() {
    return this.getAttribute(WCATTR.Appearance);
  }

  set appearance(val) {
    if (APPEARANCES.includes(val)) {
      this.setAttribute(WCATTR.Appearance, val);
    }
  }

  get loading() {
    return this.hasAttribute(WCATTR.Loading);
  }

  set loading(val) {
    val ? this.setAttribute(WCATTR.Loading, '') : this.removeAttribute(WCATTR.Loading);
  }

  connectedCallback() {
    this.mode = this.mode || MODE.Primary;
    this.appearance = this.appearance || APPEARANCE.Themed;
    this.size = this.size || SIZE.Medium;

    this.$button.addEventListener('click', () => {
      this.dispatchEvent(
        new Event('click', {
          bubbles: false,
          composed: true,
        })
      );
    });
  }
}

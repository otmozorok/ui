import { ICONS, WCATTR, WebComponent } from '../.shared/index.js';
import template from './template.js';

export class IconComponent extends WebComponent {
  static observedAttributes = [WCATTR.Name, WCATTR.SizeNumber];

  constructor() {
    super(template);

    this.$svg = this.shadowRoot.querySelector('svg');
    this.$use = this.shadowRoot.querySelector('use');
  }

  set sizeNumber(val) {
    if (val) {
      this.$svg.setAttribute('width', `${val}px`);
      this.$svg.setAttribute('height', `${val}px`);
    }
  }

  set name(val) {
    if (ICONS.includes(val)) {
      const href = this.$use.getAttribute('href');
      const arr = href.split('#');
      arr[1] = val;
      this.$use.setAttribute('href', arr.join('#'));
    }
  }

  connectedCallback() {
    this.sizeNumber = 24;
  }
}

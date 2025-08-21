import { ICONS, WCATTR } from '../../consts/index.js';
import { sizeNumberProp } from '../../props/index.js';
import { WebComponent } from '../../web-component/index.js';
import template from './template.js';

export class IconComponent extends WebComponent {
  static observedAttributes = [WCATTR.Name, WCATTR.SizeNumber];

  constructor() {
    super(template, { ...sizeNumberProp });

    this.$use = this.$('use');
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
    this.sizeNumber = this.sizeNumber ?? 24;
  }
}

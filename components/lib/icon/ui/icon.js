import { ICONS, WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './icon.template.js';

export class IconComponent extends WebComponent {
  static observedAttributes = [WCATTR.Name, WCATTR.SizeNumber];

  constructor() {
    super(template, props);

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
    super.connectedCallback();
    this.sizeNumber = this.sizeNumber || 1.5;
  }
}

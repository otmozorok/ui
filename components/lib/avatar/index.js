import { COLOR, SHAPE, WCATTR } from '../../consts/index.js';
import { WebComponent } from '../../web-component/index.js';
import props from './props.js';
import template from './template.js';

/**
 * Avatar
 * @docs https://otmozorok.github.io/ui/?path=/docs/components-avatar--docs
 */
export class AvatarComponent extends WebComponent {
  static observedAttributes = [WCATTR.Color, WCATTR.SizeNumber, WCATTR.Shape];

  constructor() {
    super(template, props);
  }

  connectedCallback() {
    super.connectedCallback();
    this.sizeNumber = this.sizeNumber || 48;
    this.color = this.color || COLOR.Blue;
    this.shape = this.shape || SHAPE.Circle;
  }
}

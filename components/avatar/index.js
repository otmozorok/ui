import { COLOR, COLORS, SHAPE, SHAPES, WCATTR, WebComponent } from '../.shared/index.js';
import template from './template.js';

/**
 * Avatar
 * @docs https://otmozorok.github.io/ui/?path=/docs/components-avatar--docs
 */
export class AvatarComponent extends WebComponent {
  static observedAttributes = [WCATTR.Src, WCATTR.Color, WCATTR.SizeNumber, WCATTR.Shape];

  constructor() {
    super(template);

    this.$wrapper = this.$('.wrapper');
    this.$img = this.$('img');
    this.$bg = this.$('.bg');
  }

  get src() {
    return this.getAttribute(WCATTR.Src);
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

  get color() {
    return this.getAttribute(WCATTR.Color);
  }

  /**
   * @param {typeof COLOR[keyof typeof COLOR]} val
   */
  set color(val) {
    if (COLORS.includes(val)) {
      this.setAttribute(WCATTR.Color, val);
    }
  }

  get sizeNumber() {
    return this.$wrapper.style.width || this.$wrapper.style.height;
  }

  /** @param {number} val */
  set sizeNumber(val) {
    if (val) {
      this.$wrapper.style.width = `${val}px`;
      this.$wrapper.style.height = `${val}px`;
    }
  }

  get shape() {
    return this.getAttribute(WCATTR.Shape);
  }

  /** @param {typeof SHAPE[keyof typeof SHAPE]} val */
  set shape(val) {
    if (SHAPES.includes(val)) {
      this.setAttribute(WCATTR.Shape, val);
    }
  }

  connectedCallback() {
    this.sizeNumber = this.sizeNumber || 48;
    this.src = this.src || '';
    this.color = this.color || COLOR.Blue;
    this.shape = this.shape || SHAPE.Circle;
  }
}

import { APPEARANCES, rounded, WCATTR, WebComponent } from '../.shared/index.js';
import template from './template.js';

/**
 * Dot
 * @link https://otmozorok.github.io/ui/?path=/docs/components-dot--docs
 */
export class DotComponent extends WebComponent {
  static observedAttributes = [WCATTR.Value, WCATTR.Rounded, WCATTR.Appearance];

  constructor() {
    super(template);
  }

  get appearance() {
    return this.getAttribute(WCATTR.Appearance);
  }

  set appearance(val) {
    if (APPEARANCES.includes(val)) {
      this.setAttribute(WCATTR.Appearance, val);
    }
  }
}

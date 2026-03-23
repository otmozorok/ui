import { HTMLTAG, WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './image.template.js';

/**
 * Image
 * @link https://otmozorok.github.io/ui/?path=/docs/components-image--docs
 */
export class ImageComponent extends WebComponent {
  static observedAttributes = [WCATTR.BorderRadius, WCATTR.Width, WCATTR.Height, WCATTR.Src];

  constructor() {
    super(template, props);

    /**
     * @type {HTMLImageElement}
     */
    this.$img = this.$(HTMLTAG.Image);
  }

  connectedCallback() {
    super.connectedCallback?.();

    this.$img.src = this.src;
  }
}

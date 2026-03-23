import { SHAPE, WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './skeleton.template.js';

/**
 * Skeleton
 * @link https://otmozorok.github.io/ui/?path=/docs/components-skeleton--docs
 */
export class SkeletonComponent extends WebComponent {
  static observedAttributes = [WCATTR.Width, WCATTR.Height, WCATTR.Shape];

  constructor() {
    super(template, props);
  }

  connectedCallback() {
    super.connectedCallback?.();

    this.shape = this.shape || SHAPE.Squircle;
  }
}

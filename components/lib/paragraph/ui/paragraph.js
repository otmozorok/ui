import { WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './paragraph.template.js';

/**
 * Paragraph
 * @docs https://otmozorok.github.io/ui/?path=/docs/typography-paragraph--docs
 */
export class ParagraphComponent extends WebComponent {
  static observedAttributes = [WCATTR.Appearance, WCATTR.Caps];

  constructor() {
    super(template, props);
  }
}

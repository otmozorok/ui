import { HTMLTAG } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './glitch.template.js';

/**
 * Glitch
 * @link https://otmozorok.github.io/ui/?path=/docs/components-glitch--docs
 */
export class GlitchComponent extends WebComponent {
  static observedAttributes = [];

  constructor() {
    super(template, props);
    this.$span = this.$(HTMLTAG.Span);
    this.$slot = this.$(HTMLTAG.Slot);
  }

  connectedCallback() {
    super.connectedCallback();
    this.$slot.addEventListener('slotchange', () => {
      const [node] = this.$slot.assignedNodes();
      node && (this.$span.dataset.text = node.data);
    });
  }
}

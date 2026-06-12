import { HTMLTAG, WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './accordion.template.js';

/**
 * Accordion
 * @link https://otmozorok.github.io/ui/?path=/docs/components-accordion--docs
 */
export class AccordionComponent extends WebComponent {
  static observedAttributes = [WCATTR.Open];

  constructor() {
    super(template, props);

    /**
     * @type { HTMLDetailsElement }
     */
    this.$details = this.$(HTMLTAG.Details);
    /**
     * @type {boolean}
     */
    this.open = this.$details.open;
  }

  connectedCallback() {
    super.connectedCallback?.();

    this.$details.addEventListener('toggle', (e) => {
      const open = e.newState === 'open'
      this.open = open;
      this.dispatchEvent(new CustomEvent(open ? 'show' : 'hide', { bubbles: false, composed: true }));
    });
  }

  show() {
    this.$details.open = true;
    this.open = true;
  }

  hide() {
    this.$details.open = false;
    this.open = false;
  }
}

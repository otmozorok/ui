import { Events, HTMLTAG, WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './banner.template.js';

/**
 * Banner
 * @link https://otmozorok.github.io/ui/?path=/docs/components-banner--docs
 */
export class BannerComponent extends WebComponent {
  static observedAttributes = [WCATTR.Image, WCATTR.Appearance, WCATTR.Closable];

  constructor() {
    super(template, props);

    /**
     * @type {HTMLButtonElement}
     */
    this.$button = this.$(HTMLTAG.Button);
  }

  connectedCallback() {
    super.connectedCallback?.();

    this.$button.addEventListener(Events.Click, (e) => {
      e.stopPropagation();
      e.preventDefault();

      this.dispatchEvent(
        new CustomEvent(Events.Close, {
          bubbles: false,
          composed: true,
        })
      );
    });
  }
}

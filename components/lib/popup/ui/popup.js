import { HTMLTAG } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './popup.template.js';

/**
 * Popup
 * @link https://otmozorok.github.io/ui/?path=/docs/components-popup--docs
 */
export class PopupComponent extends WebComponent {
  static observedAttributes = [];

  constructor() {
    super(template, props);

    /**
     * @type {HTMLDialogElement}
     */
    this.$dialog = this.$(HTMLTAG.Dialog);
  }

  connectedCallback() {
    super.connectedCallback?.();

    this.$dialog.addEventListener('toggle', (e) =>
      this.dispatchEvent(new CustomEvent(e.newState === 'open' ? 'show' : 'close', { bubbles: false, composed: true }))
    );
  }

  /**
   * Closes the popup
   */
  close() {
    this.$dialog.hidePopover();
  }

  /**
   * Shows the popup
   */
  show() {
    this.$dialog.showPopover();
  }
}

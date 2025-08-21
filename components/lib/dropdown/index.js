import { WCATTR } from '../../consts/index.js';
import { WebComponent } from '../../web-component/index.js';
import template from './template.js';

/**
 * Dropdown
 * @docs https://otmozorok.github.io/ui/?path=/docs/components-dropdown--docs
 */
export class DropdownComponent extends WebComponent {
  static observedAttributes = [WCATTR.Open];

  constructor() {
    super(template);

    this.$trigger = this.$('slot[name="trigger"]');
  }

  get open() {
    return this.hasAttribute(WCATTR.Open);
  }

  set open(val) {
    val ? this.setAttribute(WCATTR.Open, '') : this.removeAttribute(WCATTR.Open);
    this.dispatchEvent(
      new CustomEvent('open-change', {
        detail: val,
      })
    );
  }

  toggle() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }

  connectedCallback() {
    this.$trigger.addEventListener('click', this.toggle.bind(this));

    document.addEventListener('click', (e) => {
      if (!this.contains(e.target)) this.close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  }
}

import { WebComponent } from '../../shared/index.js';

export class DropdownComponent extends WebComponent {
  static observedAttributes = ['open'];

  constructor() {
    super();

    this.shadowRoot.innerHTML = /*html*/ `
        <style>
            .trigger {
                position: relative;
                display: inline-flex;
                anchor-name: --dropdown;
            }
        
            .dropdown {
                display: none;
                position: absolute;
                border-radius: 16px;
                font-weight: 500;
                view-transition-name: --dropdown;
                position-anchor: --dropdown;
                box-shadow: var(--shadow);
                z-index: var(--z-tooltip);
                width: 250px;
                overflow: hidden;
            }
        
            :host([open]) .dropdown {
                display: block;
                position-area: bottom span-right;
                margin-top: 5px;
            }
        </style>
        
        <div class="trigger">
            <slot name="trigger">⚠️</slot>
        </div>
        <div class="dropdown">
            <slot></slot>
        </div>
        `;

    this.$trigger = this.shadowRoot.querySelector('.trigger');
    this.$dropdown = this.shadowRoot.querySelector('.dropdown');
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

  toggle() {
    this.open = !this.open;
  }

  close() {
    this.open = false;
  }

  get open() {
    return this.hasAttribute('open');
  }

  set open(val) {
    val ? this.setAttribute('open', '') : this.removeAttribute('open');
    this.dispatchEvent(
      new CustomEvent('open-change', {
        detail: val,
      })
    );
  }
}

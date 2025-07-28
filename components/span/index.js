import { WebComponent } from '../.shared/index.js';

export class SpanComponent extends WebComponent {
  constructor() {
    super();

    this.shadowRoot.innerHTML = /*html*/ `
    <span>
        <slot></slot>
    </span>
    `;
  }
}

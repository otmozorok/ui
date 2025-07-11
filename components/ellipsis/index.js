import { WebComponent } from '../.shared/index.js';

export class EllipsisComponent extends WebComponent {
  constructor() {
    super();

    this.shadowRoot.innerHTML = /*html*/ `
    <style>
        :host([max-lines="1"]) {
            span {
                display: block;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        :host([max-lines="2"]) {
            span {
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
        :host([max-lines="3"]) {
            span {
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }
        }
    </style>
    <span>
        <slot></slot>
    </span>
    `;
  }
}

import { WCTAG, WebComponent } from '../.shared/index.js';

export class EllipsisComponent extends WebComponent {
  static tagName = WCTAG.Ellipsis;

  constructor() {
    super();

    this.shadowRoot.innerHTML = /*html*/ `
      <style>
        :host([max-lines="1"]) {
          span {
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
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

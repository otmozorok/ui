import {
    WebComponent
} from '../../shared/index.js';

export class ParagraphComponent extends WebComponent {
    constructor() {
        super();

        this.shadowRoot.innerHTML = /*html*/ `
        <style>
            p {
                margin: 0;
                padding: 0;
            }
        </style>
        
        <p>
            <slot></slot>
        </p>
        `;
    }
}
import {
    SIZE,
    SIZES,
    WebComponent
} from '../../shared/index.js';

export class LoaderComponent extends WebComponent {
    static observedAttributes = ['size'];

    constructor() {
        super();

        this.shadowRoot.innerHTML = /*html*/ `
        <style>
            loader {
                display: inline-flex;
                position: relative;
        
                &::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-right: 1px solid hsla(var(--text-color-hsl), 0.9);
                    border-radius: 0 50% 50% 0;
                    animation: spin 1s linear infinite;
                }
            }
        
            .small {
                width: 15px;
                height: 15px;
            }
        
            .medium {
                width: 20px;
                height: 20px;
            }
        
            .large {
                width: 25px;
                height: 25px;
            }
        
            @keyframes spin {
                to {
                    transform: rotate(360deg);
                }
            }
        </style>
        
        <loader></loader>
        `;

        this.$loader = this.shadowRoot.querySelector('loader');

        /**
         * @type {SIZE}
         */
        this.size = SIZE.Medium;
    }

    /**
     * @param {SIZE} val
     */
    set size(val) {
        switch (val) {
            case SIZE.Small:
            case SIZE.Medium:
            case SIZE.Large:
                this.$loader.classList.remove(...SIZES);
                this.$loader.classList.add(val);
                break;

            default:
                break;
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'size') {
            switch (newValue) {
                case SIZE.Small:
                case SIZE.Medium:
                case SIZE.Large:
                    this.size = newValue;
                    break;
            }
        }
    }
}
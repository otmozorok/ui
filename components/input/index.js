import {
    MODE,
    MODES,
    SIZE,
    SIZES,
    WebComponent
} from '../../shared/index.js';

export class InputComponent extends WebComponent {
    static observedAttributes = ['mode', 'size', 'loading'];

    constructor() {
        super();

        this.shadowRoot.innerHTML = /*html*/ `
        <style></style>
        
        <input />
        `;

        /**
         * @type {MODE}
         */
        this.mode = MODE.Primary;

        /**
         * @type {SIZE}
         */
        this.size = SIZE.Medium;
    }

    /**
     * @param {MODE} val
     */
    set mode(val) {
        switch (val) {
            case MODE.Secondary:
            case MODE.Primary:
            case MODE.Link:
            case MODE.Tertiary:
                // this.$button.classList.remove(...MODES);
                // this.$button.classList.add(val);
                break;

            default:
                break;
        }
    }

    /**
     * @param {SIZE} val
     */
    set size(val) {
        switch (val) {
            case SIZE.Small:
            case SIZE.Medium:
            case SIZE.Large:
                // this.$button.classList.remove(...SIZES);
                // this.$button.classList.add(val);
                break;

            default:
                break;
        }
    }

    get loading() {
        return this.hasAttribute('loading');
    }

    set loading(val) {
        if (val === 'true') {
            this.$button.classList.add('loading');
        } else {
            this.$button.classList.remove('loading');
        }
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'mode') {
            switch (newValue) {
                case MODE.Secondary:
                case MODE.Primary:
                case MODE.Link:
                case MODE.Tertiary:
                    this.mode = newValue;
                    break;
            }
        }

        if (name === 'size') {
            switch (newValue) {
                case SIZE.Small:
                case SIZE.Medium:
                case SIZE.Large:
                    this.size = newValue;
                    break;
            }
        }

        if (name === 'loading') {
            this.loading = newValue;
        }
    }
}
export class InputComponent extends WebComponent {
    static observedAttributes: string[];
    constructor();
    /**
     * @param {MODE} val
     */
    set mode(val: Readonly<{
        Link: "link";
        Primary: "primary";
        Secondary: "secondary";
    }>);
    /**
     * @param {SIZE} val
     */
    set size(val: Readonly<{
        Small: "small";
        Medium: "medium";
        Large: "large";
    }>);
    set loading(val: boolean);
    get loading(): boolean;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
}
import { WebComponent } from '../../web-component/index.js';

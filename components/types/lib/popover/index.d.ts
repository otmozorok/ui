export class PopoverComponent extends WebComponent {
    static observedAttributes: string[];
    constructor();
    $popover: Element;
    /**
     * @param {POSITION} val
     */
    set position(val: Readonly<{
        Top: "top";
        Bottom: "bottom";
        Left: "left";
        Right: "right";
    }>);
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
}
import { WebComponent } from '../../web-component/index.js';

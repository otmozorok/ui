/**
 * Dropdown
 * @docs https://otmozorok.github.io/ui/?path=/docs/components-dropdown--docs
 */
export class DropdownComponent extends WebComponent {
    static observedAttributes: "open"[];
    constructor();
    $trigger: Element;
    set open(val: boolean);
    get open(): boolean;
    toggle(): void;
    close(): void;
}
import { WebComponent } from '../../web-component/index.js';

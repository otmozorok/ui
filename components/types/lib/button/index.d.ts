/**
 * Button
 * @docs https://otmozorok.github.io/ui/?path=/docs/components-button--docs
 */
export class ButtonComponent extends WebComponent {
    static observedAttributes: ("loading" | "size" | "mode")[];
    constructor();
    $button: Element;
    mode: any;
    appearance: any;
    size: any;
}
import { WebComponent } from '../../web-component/index.js';

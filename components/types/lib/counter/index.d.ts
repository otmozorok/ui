/**
 * Counter
 * @link https://otmozorok.github.io/ui/?path=/docs/components-counter--docs
 */
export class CounterComponent extends WebComponent {
    static observedAttributes: ("inverse" | "appearance" | "value" | "rounded")[];
    constructor();
    $span: Element;
    appearance: any;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
    #private;
}
import { WebComponent } from '../../web-component/index.js';

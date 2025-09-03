/**
 * Counter
 * @link https://otmozorok.github.io/ui/?path=/docs/components-counter--docs
 */
export class CounterComponent extends WebComponent {
    static observedAttributes: ("appearance" | "value" | "rounded")[];
    constructor();
    $span: Element;
    set rounded(val: boolean);
    get rounded(): boolean;
    set value(val: number);
    get value(): number;
    appearance: any;
    #private;
}
import { WebComponent } from '../../web-component/index.js';

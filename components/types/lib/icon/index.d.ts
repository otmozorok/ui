export class IconComponent extends WebComponent {
    static observedAttributes: ("name" | "size-number")[];
    constructor();
    $use: Element;
    set name(val: any);
}
import { WebComponent } from '../../web-component/index.js';

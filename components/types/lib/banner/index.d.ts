/**
 * Banner
 * @link https://otmozorok.github.io/ui/?path=/docs/components-banner--docs
 */
export class BannerComponent extends WebComponent {
    static observedAttributes: ("appearance" | "closable" | "src")[];
    constructor();
    /**
     * @type {HTMLDivElement}
     */
    $wrapper: HTMLDivElement;
    attributeChangedCallback(name: any, oldValue: any, newValue: any): void;
}
import { WebComponent } from '../../web-component/index.js';

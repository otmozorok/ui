export class InputComponent extends WebComponent {
    constructor();
    /** @type {HTMLInputElement} */
    $input: HTMLInputElement;
    set value(newValue: string);
    get value(): string;
}
import { WebComponent } from '../../web-component/index.js';

import { WebComponent } from '../.shared/index.js';

/**
 * Компонент аккордеона, реализованный как пользовательский веб-компонент.
 * Использует теги <details> и <summary> для создания интерактивного блока с раскрывающимся содержимым.
 *
 * @extends WebComponent
 * @class
 */
export class AccordionComponent extends WebComponent {
  /**
   * Конструктор компонента. Создаёт структуру аккордеона внутри Shadow DOM.
   * Добавляет стили для кастомизации отображения и поведения.
   *
   * @constructor
   * @memberof AccordionComponent
   */
  constructor() {
    super();

    this.shadowRoot.innerHTML = /*html*/ `
    <style>
        summary {
            display: flex;
            align-items: end;
            gap: 5px;
            cursor: pointer;

            &::-webkit-details-marker {
                display: none;
            }
        }

        details[open] .arrow {
            transform: rotate(90deg);
        }
    </style>

    <details>
        <summary>
            <slot name="header"><wc-headline>Accordion Header</wc-headline></slot>
            <wc-icon class="arrow" name="chevron-right"></wc-icon>
        </summary>
        <slot></slot>
    </details>
    `;
  }
}

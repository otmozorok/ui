/**
 * Базовый класс для создания пользовательских веб-компонентов с использованием Shadow DOM.
 * Реализует жизненный цикл компонента и обработку атрибутов.
 */
export class WebComponent extends HTMLElement {
    /**
     * Конструктор компонента
     * @param {DocumentFragment} template - Шаблон DOM-структуры компонента
     * @param {Record<string, import('../utils/index.js').Props>} props - Описание свойств компонента
     */
    constructor(template: DocumentFragment, props: Record<string, import("../utils/index.js").Props>);
    /**
     * Вызывается при добавлении компонента в DOM
     */
    connectedCallback(): void;
    /**
     * Вызывается при удалении компонента из DOM
     */
    disconnectedCallback(): void;
    /**
     * Обработчик изменений атрибутов компонента
     * @param {typeof WCATTR[keyof typeof WCATTR]} name - Название измененного атрибута
     * @param {unknown} oldValue - Старое значение атрибута
     * @param {unknown} newValue - Новое значение атрибута
     */
    attributeChangedCallback(name: (typeof WCATTR)[keyof typeof WCATTR], oldValue: unknown, newValue: unknown): void;
    gap: unknown;
    sizeNumber: unknown;
    value: unknown;
    src: unknown;
    /**
     * Поиск элемента в Shadow DOM компонента
     * @param {string} name - CSS-селектор для поиска элемента
     * @returns {Element|null} Найденный элемент или null
     */
    $(name: string): Element | null;
}
import { WCATTR } from '../consts/index.js';

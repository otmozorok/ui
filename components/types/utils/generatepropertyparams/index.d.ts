/**
 * Конфигурация свойств.
 * Определяет типы, отражение и атрибуты для каждого свойства компонента.
 *
 * @typedef {Object} Props
 * @property {'string' | 'number' | 'boolean' | 'number-px'| 'number-rem'} type - Тип данных свойства (например: 'String', 'Boolean', 'Number').
 * @property {boolean} reflect - Флаг, указывающий, должно ли свойство отражаться в DOM.
 * @property {string} [attribute] - Имя атрибута в DOM (по умолчанию совпадает с именем свойства).
 */
/**
 * Генерирует дескрипторы свойств на основе конфигурации `props`.
 *
 * @param {Record<string, Props>} props - Объект с описанием атрибутов и их типов.
 * @returns {Object} - Объект с дескрипторами для `Object.defineProperty`.
 */
export function generatePropertyParams(props: Record<string, Props>): any;
/**
 * Конфигурация свойств.
 * Определяет типы, отражение и атрибуты для каждого свойства компонента.
 */
export type Props = {
    /**
     * - Тип данных свойства (например: 'String', 'Boolean', 'Number').
     */
    type: "string" | "number" | "boolean" | "number-px" | "number-rem";
    /**
     * - Флаг, указывающий, должно ли свойство отражаться в DOM.
     */
    reflect: boolean;
    /**
     * - Имя атрибута в DOM (по умолчанию совпадает с именем свойства).
     */
    attribute?: string;
};

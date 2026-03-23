/**
 * Конфигурация свойств.
 * Определяет типы, отражение и атрибуты для каждого свойства компонента.
 *
 * @typedef {Object} Props
 * @property {'string' | 'number' | 'boolean' | 'number-rem' | 'image'} type - Тип данных свойства.
 * @property {boolean} reflect - Флаг, указывающий, должно ли свойство отражаться в DOM.
 * @property {string} [attribute] - Имя атрибута в DOM (по умолчанию совпадает с именем свойства).
 */

import { camelToKebab } from '../attr/index';

/**
 * Генерирует дескрипторы свойств на основе конфигурации `props`.
 *
 * @param {Record<string, Props>} props - Объект с описанием атрибутов и их типов.
 * @returns {Object} - Объект с дескрипторами для `Object.defineProperty`.
 */
export function generatePropertyParams(props) {
  const descriptors = {};

  for (const [propName, config] of Object.entries(props)) {
    const { type, attribute, reflect } = config;
    const attrName = attribute || propName;

    descriptors[propName] = {
      get() {
        const value = this.getAttribute(attrName);

        // Конвертация значения в нужный тип
        switch (type) {
          case 'boolean':
            return value !== null;

          case 'number':
            return value !== null ? parseFloat(value) : null;

          case 'number-rem':
            return parseFloat(this.style?.getPropertyValue(`--${attrName}`));

          case 'image':
            return this.style?.getPropertyValue(`--${attrName}`).match(/url\((.*?)\)/)[1] || undefined;

          default:
            return value;
        }
      },
      set(value) {
        // Отражение в DOM атрибут, если `reflect: true`
        if (reflect) {
          switch (type) {
            case 'boolean':
              value ? this.setAttribute(camelToKebab(attrName), '') : this.removeAttribute(camelToKebab(attrName));
              break;

            case 'number-rem':
              this.style?.setProperty(`--${attrName}`, value + 'rem');
              break;

            case 'image':
              this.style?.setProperty(`--${attrName}`, `url(${value})`);
              break;

            default:
              this.setAttribute(camelToKebab(attrName), String(value));
              break;
          }
        }
      },
      enumerable: true,
      configurable: true,
    };
  }

  return descriptors;
}

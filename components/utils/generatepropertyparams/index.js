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

          default:
            return value;
        }
      },
      set(value) {
        // Отражение в DOM атрибут, если `reflect: true`
        if (reflect) {
          switch (type) {
            case 'boolean':
              value ? this.setAttribute(attrName, '') : this.removeAttribute(attrName);
              break;

            case 'number-rem':
              this.style?.setProperty(`--${attrName}`, value + 'rem');
              break;

            default:
              this.setAttribute(attrName, String(value));
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

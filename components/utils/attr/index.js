/**
 * Переключает значение атрибута на элементе.
 *
 * @param {boolean} value - Новое значение для установки в качестве атрибута.
 * @param {string} key - Ключ kebab-case для атрибута, который необходимо переключить.
 * @param {HTMLElement} el - HTML-элемент, на котором необходимо переключить атрибут.
 */
export function toggleAttr(value, key, el) {
  if (value) {
    el[kebabToCamel(key)] = true;
  } else {
    el[kebabToCamel(key)] = false;
  }
}

/**
 * Устанавливает значение атрибута на элементе.
 *
 * @param {any} value - Значение для установки в качестве атрибута.
 * @param {string} key - Ключ kebab-case для атрибута, который необходимо установить.
 * @param {HTMLElement} el - HTML-элемент, на котором необходимо установить атрибут.
 */
export function setAttr(value, key, el) {
  if (value) {
    el[kebabToCamel(key)] = value;
  }
}

/**
 * Преобразует строку kebab-case в camelCase.
 *
 * @param {string} str - Строка kebab-case, которую нужно преобразовать.
 * @returns {string} - Версия camelCase строки.
 */
export function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

/**
 * Преобразует строку camelCase в kebab-case.
 *
 * @param {string} str - Строка camelCase, которую нужно преобразовать.
 * @returns {string} - Версия kebab-case строки.
 */
export function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

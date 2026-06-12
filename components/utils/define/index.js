/**
 * Определяет пользовательский элемент с заданным именем.
 *
 * Эта функция проверяет, существует ли уже пользовательский элемент с указанным именем.
 * Если его нет, она определяет элемент с помощью customElements.define().
 *
 * @param {string} name Имя пользовательского элемента.
 * @param {HTMLElementConstructor} component Класс компонента для определения.
 */
export function define(name, component) {
  customElements.get(name) || customElements.define(name, component);
}

import {
  COLORS,
  SHAPES,
  MODES,
  APPEARANCES,
  WCATTR,
  SIZES,
  ICONS,
  COLS,
  ROWS,
  SIZES_BOTTOM_SHEET,
} from '../consts/index.js';
import { generatePropertyParams, kebabToCamel } from '../utils/index.js';

/**
 * Базовый класс для создания пользовательских веб-компонентов с использованием Shadow DOM.
 * Реализует жизненный цикл компонента и обработку атрибутов.
 */
export class WebComponent extends HTMLElement {
  /**
   * Конструктор компонента
   * @param {DocumentFragment} template - Шаблон DOM-структуры компонента
   * @param {Record<string, import('../utils/index.js').Props> | undefined} props - Описание свойств компонента
   */
  constructor(template, props) {
    super();
    this.attachShadow({ mode: 'open' });
    this.template = template;
    this.shadowRoot.appendChild(this.template.cloneNode(true));
    props && Object.defineProperties(this, generatePropertyParams(props));
  }

  /**
   * Вызывается при добавлении компонента в DOM
   */
  connectedCallback() {
    console.debug(
      '%c connected ',
      'color: white; background-color: black; padding: 2px 4px; border-radius: 2px;',
      this.tagName.toLowerCase()
    );
  }

  /**
   * Вызывается при удалении компонента из DOM
   */
  disconnectedCallback() {
    console.debug(
      '%c disconnected ',
      'color: white; background-color: black; padding: 2px 4px; border-radius: 2px;',
      this.tagName.toLowerCase()
    );
  }

  /**
   * Обработчик изменений атрибутов компонента
   * @param {typeof WCATTR[keyof typeof WCATTR]} name - Название измененного атрибута
   * @param {unknown} oldValue - Старое значение атрибута
   * @param {unknown} newValue - Новое значение атрибута
   */
  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    const attributeMap = {
      [WCATTR.Appearance]: { prop: WCATTR.Appearance, values: APPEARANCES },
      [WCATTR.Color]: { prop: WCATTR.Color, values: COLORS },
      [WCATTR.Cols]: { prop: WCATTR.Cols, values: COLS },
      [WCATTR.Mode]: { prop: WCATTR.Mode, values: MODES },
      [WCATTR.Name]: { prop: WCATTR.Name, values: ICONS },
      [WCATTR.Rows]: { prop: WCATTR.Rows, values: ROWS },
      [WCATTR.Shape]: { prop: WCATTR.Shape, values: SHAPES },
      [WCATTR.Size]: { prop: WCATTR.Size, values: [...SIZES, ...SIZES_BOTTOM_SHEET] },
    };

    if (attributeMap[name]) {
      const { prop, values } = attributeMap[name];
      if (values.includes(newValue)) {
        this[kebabToCamel(prop)] = newValue;
      }
      return;
    }

    if (
      [
        WCATTR.Caps,
        WCATTR.Closable,
        WCATTR.Disabled,
        WCATTR.Filled,
        WCATTR.FullWidth,
        WCATTR.Inverse,
        WCATTR.Island,
        WCATTR.Loading,
        WCATTR.Open,
        WCATTR.Rounded,
      ].includes(name)
    ) {
      this[kebabToCamel(name)] = newValue === '';
      return;
    }

    this[kebabToCamel(name)] = newValue;
  }

  /**
   * Поиск элемента в Shadow DOM компонента
   * @param {string} name - CSS-селектор для поиска элемента
   * @returns {Element|null} Найденный элемент или null
   */
  $(name) {
    return this.shadowRoot.querySelector(name);
  }

  render() {
    this.shadowRoot.appendChild(this.template.cloneNode(true));
  }
}

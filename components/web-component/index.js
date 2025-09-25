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
} from '../consts/index.js';
import { generatePropertyParams } from '../utils/index.js';

const IS_DEV = import.meta.env.MODE === 'development';

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
  constructor(template, props) {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.cloneNode(true));

    if (props) {
      Object.defineProperties(this, generatePropertyParams(props));
    }
  }

  /**
   * Вызывается при добавлении компонента в DOM
   */
  connectedCallback() {
    IS_DEV &&
      console.log(
        '%c connected ',
        'color: white; background-color: black; padding: 2px 4px; border-radius: 2px;',
        this.tagName.toLowerCase()
      );
  }

  /**
   * Вызывается при удалении компонента из DOM
   */
  disconnectedCallback() {
    IS_DEV &&
      console.log(
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
      [WCATTR.Size]: { prop: WCATTR.Size, values: SIZES },
    };

    // Обработка атрибутов с валидацией значений
    if (attributeMap[name]) {
      const { prop, values } = attributeMap[name];
      if (values.includes(newValue)) {
        this[prop] = newValue;
      }
      return;
    }

    // Обработка булевых атрибутов
    if ([WCATTR.Loading, WCATTR.Rounded, WCATTR.Closable].includes(name)) {
      this[name] = newValue === '';
      return;
    }

    // Прямое присвоение без валидации
    switch (name) {
      case WCATTR.Gap:
        this.gap = newValue;
        break;
      case WCATTR.SizeNumber:
        this.sizeNumber = newValue;
        break;
      case WCATTR.Value:
        this.value = newValue;
        break;
      case WCATTR.Src:
        this.src = newValue;
        break;
    }
  }

  /**
   * Поиск элемента в Shadow DOM компонента
   * @param {string} name - CSS-селектор для поиска элемента
   * @returns {Element|null} Найденный элемент или null
   */
  $(name) {
    return this.shadowRoot.querySelector(name);
  }
}

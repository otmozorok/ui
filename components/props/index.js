import {
  COLORS,
  SHAPES,
  WCATTR,
  COLOR,
  SHAPE,
  APPEARANCES,
  APPEARANCE,
  SIZES,
  SIZE,
  MODES,
  MODE,
} from '../consts/index.js';

export const colorProp = {
  color: {
    /** @returns {typeof COLOR[keyof typeof COLOR]} */
    get() {
      return this.getAttribute(WCATTR.Color);
    },
    /** @param {typeof COLOR[keyof typeof COLOR]} val */
    set(val) {
      if (COLORS.includes(val)) {
        this.setAttribute(WCATTR.Color, val);
      }
    },
  },
};

export const sizeNumberProp = {
  sizeNumber: {
    /** @returns {number} */
    get() {
      return this.style?.getPropertyValue('--size');
    },
    /** @param {number} val */
    set(val) {
      if (val) {
        this.style?.setProperty('--size', val.toString().replace(/\D/g, '') + 'px');
      }
    },
  },
};

export const sizeProp = {
  size: {
    /** @returns {typeof SIZE[keyof typeof SIZE]} */
    get() {
      return this.getAttribute(WCATTR.Size);
    },
    /** @param {typeof SIZE[keyof typeof SIZE]} val */
    set(val) {
      if (SIZES.includes(val)) {
        this.setAttribute(WCATTR.Size, val);
      }
    },
  },
};

export const shapeProp = {
  shape: {
    /** @returns {typeof SHAPE[keyof typeof SHAPE]} */
    get() {
      return this.getAttribute(WCATTR.Shape);
    },
    /** @param {typeof SHAPE[keyof typeof SHAPE]} val */
    set(val) {
      if (SHAPES.includes(val)) {
        this.setAttribute(WCATTR.Shape, val);
      }
    },
  },
};

export const appearanceProp = {
  appearance: {
    /** @returns {typeof APPEARANCE[keyof typeof APPEARANCE]} */
    get() {
      return this.getAttribute(WCATTR.Appearance);
    },
    /** @param {typeof APPEARANCE[keyof typeof APPEARANCE]} val */
    set(val) {
      if (APPEARANCES.includes(val)) {
        this.setAttribute(WCATTR.Appearance, val);
      }
    },
  },
};

export const modeProp = {
  mode: {
    /** @returns {typeof MODE[keyof typeof MODE]} */
    get() {
      return this.getAttribute(WCATTR.Mode);
    },
    /** @param {typeof MODE[keyof typeof MODE]} val */
    set(val) {
      if (MODES.includes(val)) {
        this.setAttribute(WCATTR.Mode, val);
      }
    },
  },
};

export const loadingProp = {
  loading: {
    /** @returns {boolean} */
    get() {
      return this.hasAttribute(WCATTR.Loading);
    },
    /** @param {boolean} val */
    set(val) {
      if (val) {
        this.setAttribute(WCATTR.Loading, '');
      } else {
        this.removeAttribute(WCATTR.Loading);
      }
    },
  },
};

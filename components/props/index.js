import { WCATTR } from '../consts/index.js';

/**
 * @typedef {Record<string, import('../utils/index.js').Props>} Prop
 */

/** @type {Prop} */
export const colorProp = {
  color: {
    type: 'string',
    reflect: true,
    attribute: WCATTR.Color,
  },
};

/** @type {Prop} */
export const sizeNumberProp = {
  sizeNumber: {
    type: 'number-rem',
    reflect: true,
    attribute: WCATTR.SizeNumber,
  },
};

/** @type {Prop} */
export const gapProp = {
  gap: {
    type: 'number-rem',
    reflect: true,
    attribute: WCATTR.Gap,
  },
};

/** @type {Prop} */
export const sizeProp = {
  size: {
    type: 'string',
    reflect: true,
    attribute: WCATTR.Size,
  },
};

/** @type {Prop} */
export const shapeProp = {
  shape: {
    type: 'string',
    reflect: true,
    attribute: WCATTR.Shape,
  },
};

/** @type {Prop} */
export const appearanceProp = {
  appearance: {
    type: 'string',
    reflect: true,
    attribute: WCATTR.Appearance,
  },
};

/** @type {Prop} */
export const modeProp = {
  mode: {
    type: 'string',
    reflect: true,
    attribute: WCATTR.Mode,
  },
};

/** @type {Prop} */
export const loadingProp = {
  loading: {
    type: 'boolean',
    reflect: true,
    attribute: WCATTR.Loading,
  },
};

/** @type {Prop} */
export const closableProp = {
  closable: {
    type: 'boolean',
    reflect: true,
    attribute: WCATTR.Closable,
  },
};

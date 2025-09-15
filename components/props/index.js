import { WCATTR } from '../consts/index.js';

/** @type {Record<string, import('../utils/index.js').Props>} */
export const colorProp = {
  color: {
    type: 'string',
    reflect: true,
    attribute: WCATTR.Color,
  },
};

/** @type {Record<string, import('../utils/index.js').Props>} */
export const sizeNumberProp = {
  sizeNumber: {
    type: 'number-px',
    reflect: true,
    attribute: WCATTR.SizeNumber,
  },
};

/** @type {Record<string, import('../utils/index.js').Props>} */
export const gapProp = {
  gap: {
    type: 'number-rem',
    reflect: true,
    attribute: WCATTR.Gap,
  },
};

/** @type {Record<string, import('../utils/index.js').Props>} */
export const sizeProp = {
  size: {
    type: 'string',
    reflect: true,
    attribute: WCATTR.Size,
  },
};

/** @type {Record<string, import('../utils/index.js').Props>} */
export const shapeProp = {
  shape: {
    type: 'string',
    reflect: true,
    attribute: WCATTR.Shape,
  },
};

/** @type {Record<string, import('../utils/index.js').Props>} */
export const appearanceProp = {
  appearance: {
    type: 'string',
    reflect: true,
    attribute: WCATTR.Appearance,
  },
};

/** @type {Record<string, import('../utils/index.js').Props>} */
export const modeProp = {
  mode: {
    type: 'string',
    reflect: true,
    attribute: WCATTR.Mode,
  },
};

/** @type {Record<string, import('../utils/index.js').Props>} */
export const loadingProp = {
  loading: {
    type: 'boolean',
    reflect: true,
    attribute: WCATTR.Loading,
  },
};

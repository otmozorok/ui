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

/** @type {Prop} */
export const capsProp = {
  caps: {
    type: 'boolean',
    reflect: true,
    attribute: WCATTR.Caps,
  },
};

/** @type {Prop} */
export const maxLinesProp = {
  maxLines: {
    type: 'number',
    reflect: true,
    attribute: WCATTR.MaxLines,
  },
};

/** @type {Prop} */
export const alignItemsProp = {
  alignItems: {
    type: 'string',
    reflect: true,
    attribute: WCATTR.AlignItems,
  },
};

/** @type {Prop} */
export const directionProp = {
  direction: {
    type: 'string',
    reflect: true,
    attribute: WCATTR.Direction,
  },
};

/** @type {Prop} */
export const rowsProp = {
  rows: {
    type: 'string',
    reflect: true,
    attribute: WCATTR.Rows,
  },
};

/** @type {Prop} */
export const colsProp = {
  cols: {
    type: 'string',
    reflect: true,
    attribute: WCATTR.Cols,
  },
};

/** @type {Prop} */
export const islandProp = {
  island: {
    type: 'boolean',
    reflect: true,
    attribute: WCATTR.Island,
  },
};

/** @type {Prop} */
export const filledProp = {
  filled: {
    type: 'boolean',
    reflect: true,
    attribute: WCATTR.Filled,
  },
};

/** @type {Prop} */
export const fullWidthProp = {
  fullWidth: {
    type: 'boolean',
    reflect: true,
    attribute: WCATTR.FullWidth,
  },
};

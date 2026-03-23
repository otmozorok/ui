import { WCATTR } from '../../../consts/index.js';
import { appearanceProp, valueProp } from '../../../props/index.js';

/**
 * @type {Record<string, import("../../../utils/index.js").Props>}
 */
export const props = {
  ...appearanceProp,
  ...valueProp,
  rounded: {
    type: 'boolean',
    reflect: true,
    attribute: WCATTR.Rounded,
  },
  inverse: {
    type: 'boolean',
    reflect: true,
    attribute: WCATTR.Inverse,
  },
};

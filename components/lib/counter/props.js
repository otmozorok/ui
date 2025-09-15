import { WCATTR } from '../../consts/index.js';
import { appearanceProp } from '../../props/index.js';

/**
 * @type {Record<string, import("../../utils").Props>}
 */
const props = {
  ...appearanceProp,
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
  value: {
    type: 'number',
    reflect: true,
    attribute: WCATTR.Value,
  },
};

export default props;

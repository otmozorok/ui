import { colsProp, gapProp, rowsProp } from '../../../props/index.js';

/**
 * @type {Record<string, import("../../../utils/index.js").Props>}
 */
export const props = {
  ...gapProp,
  ...rowsProp,
  ...colsProp,
};

import { colorProp, shapeProp, sizeNumberProp } from '../../../props/index.js';

/**
 * @type {Record<string, import("../../../utils/index.js").Props>}
 */
export const props = {
  ...sizeNumberProp,
  ...colorProp,
  ...shapeProp,
};

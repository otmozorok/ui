import { heightProp, shapeProp, widthProp } from '../../../props/index.js';

/**
 * @type {Record<string, import("../../../utils/index.js").Props>}
 */
export const props = {
  ...widthProp,
  ...heightProp,
  ...shapeProp,
};

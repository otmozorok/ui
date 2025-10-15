import { alignItemsProp, directionProp, gapProp } from '../../../props/index.js';

/**
 * @type {Record<string, import("../../../utils/index.js").Props>}
 */
export const props = {
  ...alignItemsProp,
  ...directionProp,
  ...gapProp,
};

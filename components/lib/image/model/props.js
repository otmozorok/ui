import { borderRadiusProp, heightProp, srcProp, widthProp } from '../../../props/index.js';

/**
 * @type {Record<string, import("../../../utils/index.js").Props>}
 */
export const props = {
  ...borderRadiusProp,
  ...widthProp,
  ...heightProp,
  ...srcProp,
};

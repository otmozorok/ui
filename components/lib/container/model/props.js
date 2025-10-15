import { filledProp, fullWidthProp, islandProp } from '../../../props/index.js';

/**
 * @type {Record<string, import("../../../utils/index.js").Props>}
 */
export const props = {
  ...islandProp,
  ...filledProp,
  ...fullWidthProp,
};

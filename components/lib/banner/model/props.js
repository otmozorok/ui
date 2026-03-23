import { appearanceProp, closableProp, imageProp } from '../../../props/index.js';

/**
 * @type {Record<string, import("../../../utils/index.js").Props>}
 */
export const props = {
  ...appearanceProp,
  ...closableProp,
  ...imageProp,
};

import { appearanceProp, sizeProp, capsProp } from '../../../props/index.js';

/**
 * @type {Record<string, import("../../../utils/index.js").Props>}
 */
export const props = {
  ...appearanceProp,
  ...sizeProp,
  ...capsProp,
};

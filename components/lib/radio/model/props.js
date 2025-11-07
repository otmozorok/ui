import {
  appearanceProp,
  checkedProp,
  disabledProp,
  nameProp,
  valueProp,
} from '../../../props/index.js';

/**
 * @type {Record<string, import("../../../utils/index.js").Props>}
 */
export const props = {
  ...appearanceProp,
  ...checkedProp,
  ...disabledProp,
  ...nameProp,
  ...valueProp,
};

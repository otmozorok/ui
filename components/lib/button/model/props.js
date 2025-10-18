import {
  appearanceProp,
  fullWidthProp,
  loadingProp,
  modeProp,
  sizeProp,
} from '../../../props/index.js';

/**
 * @type {Record<string, import("../../../utils/index.js").Props>}
 */
export const props = {
  ...appearanceProp,
  ...sizeProp,
  ...modeProp,
  ...loadingProp,
  ...fullWidthProp,
};

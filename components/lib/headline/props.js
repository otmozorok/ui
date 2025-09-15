import { appearanceProp, sizeProp } from '../../props/index.js';

/**
 * @type {Record<string, import("../../utils").Props>}
 */
const props = {
  ...appearanceProp,
  ...sizeProp,
};

export default props;

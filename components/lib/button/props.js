import { appearanceProp, loadingProp, modeProp, sizeProp } from '../../props/index.js';

/**
 * @type {Record<string, import("../../utils").Props>}
 */
const props = {
  ...appearanceProp,
  ...sizeProp,
  ...modeProp,
  ...loadingProp,
};

export default props;

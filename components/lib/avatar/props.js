import { colorProp, shapeProp, sizeNumberProp } from '../../props/index.js';

/**
 * @type {Record<string, import("../../utils").Props>}
 */
const props = {
  ...sizeNumberProp,
  ...colorProp,
  ...shapeProp,
};

export default props;

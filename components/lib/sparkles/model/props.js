import { symbolProp, symbolSizeProp } from "../../../props/index.js";

/**
 * @type {Record<string, import("../../../utils/index.js").Props>}
 */
export const props = {
    ...symbolProp,
    ...symbolSizeProp,
};

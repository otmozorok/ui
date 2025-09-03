export namespace colorProp {
    namespace color {
        /** @returns {typeof COLOR[keyof typeof COLOR]} */
        function get(): (typeof COLOR)[keyof typeof COLOR];
        /** @param {typeof COLOR[keyof typeof COLOR]} val */
        function set(val: (typeof COLOR)[keyof typeof COLOR]): void;
    }
}
export namespace sizeNumberProp {
    namespace sizeNumber {
        /** @returns {number} */
        function get(): number;
        /** @param {number} val */
        function set(val: number): void;
    }
}
export namespace gapProp {
    namespace gap {
        /** @returns {number} */
        function get(): number;
        /** @param {number} val */
        function set(val: number): void;
    }
}
export namespace sizeProp {
    namespace size {
        /** @returns {typeof SIZE[keyof typeof SIZE]} */
        function get(): (typeof SIZE)[keyof typeof SIZE];
        /** @param {typeof SIZE[keyof typeof SIZE]} val */
        function set(val: (typeof SIZE)[keyof typeof SIZE]): void;
    }
}
export namespace shapeProp {
    namespace shape {
        /** @returns {typeof SHAPE[keyof typeof SHAPE]} */
        function get(): (typeof SHAPE)[keyof typeof SHAPE];
        /** @param {typeof SHAPE[keyof typeof SHAPE]} val */
        function set(val: (typeof SHAPE)[keyof typeof SHAPE]): void;
    }
}
export namespace appearanceProp {
    namespace appearance {
        /** @returns {typeof APPEARANCE[keyof typeof APPEARANCE]} */
        function get(): (typeof APPEARANCE)[keyof typeof APPEARANCE];
        /** @param {typeof APPEARANCE[keyof typeof APPEARANCE]} val */
        function set(val: (typeof APPEARANCE)[keyof typeof APPEARANCE]): void;
    }
}
export namespace modeProp {
    namespace mode {
        /** @returns {typeof MODE[keyof typeof MODE]} */
        function get(): (typeof MODE)[keyof typeof MODE];
        /** @param {typeof MODE[keyof typeof MODE]} val */
        function set(val: (typeof MODE)[keyof typeof MODE]): void;
    }
}
export namespace loadingProp {
    namespace loading {
        /** @returns {boolean} */
        function get(): boolean;
        /** @param {boolean} val */
        function set(val: boolean): void;
    }
}
import { COLOR } from '../consts/index.js';
import { SIZE } from '../consts/index.js';
import { SHAPE } from '../consts/index.js';
import { APPEARANCE } from '../consts/index.js';
import { MODE } from '../consts/index.js';

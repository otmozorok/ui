import { COLOR, SHAPE } from '@otmozorok/wc/consts';
import type { HTMLAttributes } from 'vue';

export interface IAvatarProps extends /* @vue-ignore */ HTMLAttributes {
  color?: (typeof COLOR)[keyof typeof COLOR];
  shape?: (typeof SHAPE)[keyof typeof SHAPE];
  sizeNumber?: number;
}

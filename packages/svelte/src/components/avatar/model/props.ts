import { COLOR, SHAPE } from '@otmozorok/wc/consts';
import type { HTMLAttributes } from 'svelte/elements';

export interface IAvatarProps extends HTMLAttributes<HTMLDivElement> {
  color?: (typeof COLOR)[keyof typeof COLOR];
  shape?: (typeof SHAPE)[keyof typeof SHAPE];
  sizeNumber?: number;
}

import { COLOR, SHAPE, WCATTR } from '@otmozorok/wc/consts';

export interface IAvatarProps {
  [WCATTR.Color]?: (typeof COLOR)[keyof typeof COLOR];
  [WCATTR.Shape]?: (typeof SHAPE)[keyof typeof SHAPE];
  sizeNumber?: number;
  'on:click'?: () => void;
}

import { COLOR, SHAPE } from '@otmozorok/wc/consts';

export interface IAvatarProps {
  src?: string;
  color?: (typeof COLOR)[keyof typeof COLOR];
  shape?: (typeof SHAPE)[keyof typeof SHAPE];
  sizeNumber?: number;
  children?: any;
}

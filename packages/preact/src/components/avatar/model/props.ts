import { COLOR } from '@otmozorok/wc/consts';

export interface IAvatarProps {
  src?: string;
  color?: (typeof COLOR)[keyof typeof COLOR];
  size?: number;
  children?: any;
}

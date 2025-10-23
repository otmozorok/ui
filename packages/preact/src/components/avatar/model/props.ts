import { COLOR, SHAPE } from '@otmozorok/wc/consts';
import { type ComponentPropsWithoutRef } from 'preact/compat';

export interface IAvatarProps extends ComponentPropsWithoutRef<'div'> {
  src?: string;
  color?: (typeof COLOR)[keyof typeof COLOR];
  shape?: (typeof SHAPE)[keyof typeof SHAPE];
  sizeNumber?: number;
}

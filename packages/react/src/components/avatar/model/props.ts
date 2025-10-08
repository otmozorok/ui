import type { COLOR, SHAPE } from '@otmozorok/wc/consts';

export interface IAvatarProps extends React.ComponentPropsWithoutRef<'div'> {
  color?: (typeof COLOR)[keyof typeof COLOR];
  shape?: (typeof SHAPE)[keyof typeof SHAPE];
  sizeNumber?: number;
}

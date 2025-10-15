import { ALIGNITEM, DIRECTION } from '@otmozorok/wc/consts';
import { ComponentPropsWithoutRef } from 'preact/compat';

export interface IFlexProps extends ComponentPropsWithoutRef<'div'> {
  alignItems?: (typeof ALIGNITEM)[keyof typeof ALIGNITEM];
  direction?: (typeof DIRECTION)[keyof typeof DIRECTION];
  gap?: number;
}

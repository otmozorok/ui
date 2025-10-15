import { ALIGNITEM, DIRECTION } from '@otmozorok/wc/consts';

export interface IFlexProps extends React.ComponentPropsWithoutRef<'div'> {
  alignItems?: (typeof ALIGNITEM)[keyof typeof ALIGNITEM];
  direction?: (typeof DIRECTION)[keyof typeof DIRECTION];
  gap?: number;
}

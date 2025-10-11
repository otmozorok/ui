import { APPEARANCE } from '@otmozorok/wc/consts';

export interface ICounterProps extends React.ComponentPropsWithoutRef<'div'> {
  value: number;
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  rounded?: boolean;
  inverse?: boolean;
}

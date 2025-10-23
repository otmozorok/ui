import { APPEARANCE } from '@otmozorok/wc/consts';
import { type ComponentPropsWithoutRef } from 'preact/compat';

export interface ICounterProps extends ComponentPropsWithoutRef<'div'> {
  value: number;
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  rounded?: boolean;
  inverse?: boolean;
}

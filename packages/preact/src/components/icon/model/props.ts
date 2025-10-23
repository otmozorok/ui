import { ICON } from '@otmozorok/wc/consts';
import { type ComponentPropsWithoutRef } from 'preact/compat';

export interface IIconProps extends ComponentPropsWithoutRef<'svg'> {
  name: (typeof ICON)[keyof typeof ICON];
}

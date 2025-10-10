import { ICON } from '@otmozorok/wc/consts';
import { ComponentPropsWithoutRef } from 'preact/compat';

export interface IIconProps extends ComponentPropsWithoutRef<'svg'> {
  name: (typeof ICON)[keyof typeof ICON];
}

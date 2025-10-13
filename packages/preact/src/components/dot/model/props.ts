import { APPEARANCE } from '@otmozorok/wc/consts';
import { ComponentPropsWithoutRef } from 'preact/compat';

export interface IDotProps extends ComponentPropsWithoutRef<'div'> {
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
}

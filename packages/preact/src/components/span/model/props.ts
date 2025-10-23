import { APPEARANCE } from '@otmozorok/wc/consts';
import { type ComponentPropsWithoutRef } from 'preact/compat';

export interface ISpanProps extends ComponentPropsWithoutRef<'span'> {
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  caps?: boolean;
}

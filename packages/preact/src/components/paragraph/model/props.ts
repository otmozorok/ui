import { APPEARANCE } from '@otmozorok/wc/consts';
import { ComponentPropsWithoutRef } from 'preact/compat';

export interface IParagraphProps extends ComponentPropsWithoutRef<'p'> {
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  caps?: boolean;
}

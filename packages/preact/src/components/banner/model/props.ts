import { APPEARANCE } from '@otmozorok/wc/consts';
import { type ComponentPropsWithoutRef } from 'preact/compat';

export interface IBannerProps extends ComponentPropsWithoutRef<'div'> {
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  closable?: boolean;
  src?: string;
}

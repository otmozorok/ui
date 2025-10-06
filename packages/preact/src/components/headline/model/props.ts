import { APPEARANCE, SIZE } from '@otmozorok/wc/consts';
import { ComponentPropsWithoutRef } from 'preact/compat';

export interface IHeadlineProps extends ComponentPropsWithoutRef<'div'> {
  size?: (typeof SIZE)[keyof typeof SIZE];
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  caps?: boolean;
  children?: React.ReactNode;
}

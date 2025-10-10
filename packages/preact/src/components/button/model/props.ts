import { APPEARANCE, MODE, SIZE } from '@otmozorok/wc/consts';
import { ComponentPropsWithoutRef } from 'preact/compat';

export interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
  mode?: (typeof MODE)[keyof typeof MODE];
  size?: (typeof SIZE)[keyof typeof SIZE];
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

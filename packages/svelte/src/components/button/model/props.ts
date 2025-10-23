import type { APPEARANCE, MODE, SIZE } from '@otmozorok/wc/consts';
import type { HTMLButtonAttributes } from 'svelte/elements';

export interface IButtonProps extends HTMLButtonAttributes {
  size?: (typeof SIZE)[keyof typeof SIZE];
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  mode?: (typeof MODE)[keyof typeof MODE];
  loading?: boolean;
  fullWidth?: boolean;
}

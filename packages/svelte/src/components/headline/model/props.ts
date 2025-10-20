import { APPEARANCE, SIZE } from '@otmozorok/wc/consts';
import type { HTMLBaseAttributes } from 'svelte/elements';

export interface IHeadlineProps extends HTMLBaseAttributes {
  size?: (typeof SIZE)[keyof typeof SIZE];
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  caps?: boolean;
}

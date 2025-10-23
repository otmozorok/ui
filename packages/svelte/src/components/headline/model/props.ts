import { APPEARANCE, SIZE } from '@otmozorok/wc/consts';
import type { HTMLAttributes } from 'svelte/elements';

export interface IHeadlineProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: (typeof SIZE)[keyof typeof SIZE];
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  caps?: boolean;
}

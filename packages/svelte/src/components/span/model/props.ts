import { APPEARANCE } from '@otmozorok/wc/consts';
import type { HTMLAttributes } from 'svelte/elements';

export interface ISpanProps extends HTMLAttributes<HTMLSpanElement> {
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  caps?: boolean;
}

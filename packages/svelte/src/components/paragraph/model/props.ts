import { APPEARANCE, SIZE } from '@otmozorok/wc/consts';
import type { HTMLAttributes } from 'svelte/elements';

export interface IParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  caps?: boolean;
}

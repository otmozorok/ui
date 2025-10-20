import type { APPEARANCE, SIZE } from '@otmozorok/wc/consts';
import { HTMLAttributes } from 'vue';

export interface IHeadlineProps extends HTMLAttributes {
  size?: (typeof SIZE)[keyof typeof SIZE];
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  caps?: boolean;
}

import type { APPEARANCE, SIZE } from '@otmozorok/wc/consts';
import type { HTMLAttributes } from 'vue';

export interface IHeadlineProps extends /* @vue-ignore */ HTMLAttributes {
  size?: (typeof SIZE)[keyof typeof SIZE];
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  caps?: boolean;
}

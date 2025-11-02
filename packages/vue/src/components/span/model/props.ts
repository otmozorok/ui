import type { APPEARANCE } from '@otmozorok/wc/consts';
import type { HTMLAttributes } from 'vue';

export interface ISpanProps extends /* @vue-ignore */ HTMLAttributes {
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  caps?: boolean;
}

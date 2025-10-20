import type { APPEARANCE, SIZE, WCATTR } from '@otmozorok/wc/consts';
import { HTMLAttributes } from 'vue';

export interface IHeadlineProps extends /* @vue-ignore */ HTMLAttributes {
  [WCATTR.Size]?: (typeof SIZE)[keyof typeof SIZE];
  [WCATTR.Appearance]?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  [WCATTR.Caps]?: boolean;
}

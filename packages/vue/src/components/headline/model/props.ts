import type { APPEARANCE, SIZE } from '@otmozorok/wc/consts';

export interface IHeadlineProps {
  size?: (typeof SIZE)[keyof typeof SIZE];
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  caps?: boolean;
}

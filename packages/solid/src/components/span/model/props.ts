import { APPEARANCE } from '@otmozorok/wc/consts';

export interface ISpanProps {
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  caps?: boolean;
}

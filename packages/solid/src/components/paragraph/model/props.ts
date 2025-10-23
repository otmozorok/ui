import { APPEARANCE } from '@otmozorok/wc/consts';

export interface IParagraphProps {
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  caps?: boolean;
}

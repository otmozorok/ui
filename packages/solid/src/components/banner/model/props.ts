import { APPEARANCE } from '@otmozorok/wc/consts';

export interface IBannerProps {
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  closable?: boolean;
  image?: string;
}

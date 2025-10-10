import { APPEARANCE } from '@otmozorok/wc/consts';

export interface IBannerProps extends React.ComponentPropsWithoutRef<'div'> {
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  closable?: boolean;
  src?: string;
}

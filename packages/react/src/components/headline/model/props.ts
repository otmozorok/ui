import type { APPEARANCE, SIZE } from '@otmozorok/wc/consts';

export interface IHeadlineProps extends React.ComponentPropsWithoutRef<'div'> {
  size?: (typeof SIZE)[keyof typeof SIZE];
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  caps?: boolean;
}

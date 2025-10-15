import { APPEARANCE } from '@otmozorok/wc/consts';

export interface ISpanProps extends React.ComponentPropsWithoutRef<'span'> {
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  caps?: boolean;
}

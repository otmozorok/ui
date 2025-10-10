import { APPEARANCE } from '@otmozorok/wc/consts';

export interface IParagraphProps extends React.ComponentPropsWithoutRef<'p'> {
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  caps?: boolean;
}

import { APPEARANCE } from '@otmozorok/wc/consts';

export interface IDotProps extends React.ComponentPropsWithoutRef<'div'> {
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
}

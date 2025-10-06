import type { ICON } from '@otmozorok/wc/consts';

export interface IIconProps extends React.ComponentPropsWithoutRef<'div'> {
  name: (typeof ICON)[keyof typeof ICON];
}

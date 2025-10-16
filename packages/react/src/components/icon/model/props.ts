import type { ICON } from '@otmozorok/wc/consts';

export interface IIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  name: (typeof ICON)[keyof typeof ICON];
}

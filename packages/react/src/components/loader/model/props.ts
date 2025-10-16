import { SIZE } from '@otmozorok/wc/consts';

export interface ILoaderProps extends React.ComponentPropsWithoutRef<'div'> {
  size?: (typeof SIZE)[keyof typeof SIZE];
}

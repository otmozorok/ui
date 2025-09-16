import { SIZE } from '@otmozorok/wc/consts';

export interface ILoaderProps {
  size?: (typeof SIZE)[keyof typeof SIZE];
}

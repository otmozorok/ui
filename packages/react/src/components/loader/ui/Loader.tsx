import { LoaderComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import type { ILoaderProps } from '../model';

customElements.get(WCTAG.Loader) || customElements.define(WCTAG.Loader, LoaderComponent);

export function Loader({ size, ...props }: ILoaderProps) {
  return <wc-loader size={size} {...props} />;
}

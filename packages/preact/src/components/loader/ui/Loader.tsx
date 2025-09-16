import { LoaderComponent } from '@otmozorok/wc';
import { useRef } from 'preact/compat';
import { ILoaderProps } from '../model';
import { WCTAG } from '@otmozorok/wc/consts';

customElements.get(WCTAG.Loader) || customElements.define(WCTAG.Loader, LoaderComponent);

export function Loader({ size }: ILoaderProps) {
  const ref = useRef<LoaderComponent>(null);

  return <wc-loader ref={ref} size={size} />;
}

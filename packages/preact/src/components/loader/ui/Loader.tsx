import { LoaderComponent, WCTAG } from '@otmozorok/wc';
import { useRef } from 'preact/compat';
import { ILoaderProps } from '../model';

customElements.get(WCTAG.Loader) || customElements.define(WCTAG.Loader, LoaderComponent);

export function Loader({ size }: ILoaderProps) {
  const ref = useRef<LoaderComponent>(null);

  return <wc-loader ref={ref} size={size} />;
}

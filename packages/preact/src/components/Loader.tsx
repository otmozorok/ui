import { LoaderComponent } from '@otmozorok/wc';
import { SIZE } from '@otmozorok/wc/consts';
import { useRef } from 'preact/compat';

interface ILoaderProps {
  size?: (typeof SIZE)[keyof typeof SIZE];
}

export function Loader({ size }: ILoaderProps) {
  const ref = useRef<LoaderComponent>(null);

  return <wc-loader ref={ref} size={size} />;
}

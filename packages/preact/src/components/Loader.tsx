import { LoaderComponent } from '@otmozorok/wc';
import { SIZE } from '@otmozorok/shared';
import { useRef } from 'preact/compat';

interface ILoaderProps {
  size?: SIZE;
}

export function Loader({ size }: ILoaderProps) {
  const ref = useRef<LoaderComponent>(null);

  return <wc-loader ref={ref} size={size} />;
}

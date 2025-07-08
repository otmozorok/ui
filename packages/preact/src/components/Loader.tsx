import { LoaderComponent } from '@wc/components';
import { SIZE } from '@wc/shared';
import { useRef } from 'preact/compat';

interface ILoaderProps {
  size?: SIZE;
}

export function Loader({ size }: ILoaderProps) {
  const ref = useRef<LoaderComponent>(null);

  return <wc-loader ref={ref} size={size} />;
}

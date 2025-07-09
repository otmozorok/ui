import { CounterComponent } from '@pappahapa/wc';
import { useRef } from 'preact/compat';

interface ICounterProps {
  count: number;
  rounded?: boolean;
  inverse?: boolean;
  destructive?: boolean;

  [key: string]: any;
}

export function Counter({ count, rounded, inverse, destructive, ...props }: ICounterProps) {
  const ref = useRef<CounterComponent>(null);

  return (
    <wc-counter
      ref={ref}
      {...props}
      count={count}
      rounded={rounded ? true : undefined}
      inverse={inverse ? true : undefined}
      destructive={destructive ? true : undefined}
    />
  );
}

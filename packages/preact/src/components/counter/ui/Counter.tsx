import { CounterComponent } from '@otmozorok/wc';
import { useRef } from 'preact/compat';
import { ICounterProps } from '../model';
import { WCTAG } from '@otmozorok/wc/consts';

customElements.get(WCTAG.Counter) || customElements.define(WCTAG.Counter, CounterComponent);

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

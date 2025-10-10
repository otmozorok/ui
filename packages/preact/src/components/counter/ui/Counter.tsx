import { CounterComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import { ICounterProps } from '../model';

customElements.get(WCTAG.Counter) || customElements.define(WCTAG.Counter, CounterComponent);

export function Counter({ count, rounded, inverse, destructive, ...props }: ICounterProps) {
  return (
    <wc-counter
      {...props}
      count={count}
      rounded={rounded || undefined}
      inverse={inverse || undefined}
      destructive={destructive || undefined}
    />
  );
}

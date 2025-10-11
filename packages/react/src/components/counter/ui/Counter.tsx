import { CounterComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import type { ICounterProps } from '../model';

customElements.get(WCTAG.Counter) || customElements.define(WCTAG.Counter, CounterComponent);

export function Counter({ value, appearance, rounded, inverse, ...props }: ICounterProps) {
  return (
    <wc-counter
      {...props}
      value={value.toString()}
      appearance={appearance}
      rounded={rounded || undefined}
      inverse={inverse || undefined}
    />
  );
}

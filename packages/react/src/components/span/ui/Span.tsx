import { SpanComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import type { ISpanProps } from '../model';

customElements.get(WCTAG.Span) || customElements.define(WCTAG.Span, SpanComponent);

export function Span({ appearance, caps, children, ...props }: ISpanProps) {
  return (
    <wc-span appearance={appearance} caps={caps || undefined} {...props}>
      {children}
    </wc-span>
  );
}

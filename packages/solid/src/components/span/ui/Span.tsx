import { SpanComponent } from '@otmozorok/wc';
import { APPEARANCE, WCTAG } from '@otmozorok/wc/consts';
import { mergeProps, type ParentProps, splitProps } from 'solid-js';
import type { ISpanProps } from '../model';

customElements.get(WCTAG.Span) || customElements.define(WCTAG.Span, SpanComponent);

export function Span(p: ParentProps<ISpanProps>) {
  const [enums, bools, rest, props] = splitProps(
    mergeProps({ appearance: APPEARANCE.Themed }, p),
    ['appearance'],
    ['caps'],
    ['children']
  );

  return (
    <wc-span appearance={enums.appearance} caps={bools.caps || undefined} {...props}>
      {rest.children}
    </wc-span>
  );
}

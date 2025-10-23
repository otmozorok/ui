import { HeadlineComponent } from '@otmozorok/wc';
import { APPEARANCE, SIZE, WCTAG } from '@otmozorok/wc/consts';
import type { IHeadlineProps } from '../model';
import { mergeProps, ParentProps, splitProps } from 'solid-js';

customElements.get(WCTAG.Headline) || customElements.define(WCTAG.Headline, HeadlineComponent);

export function Headline(p: ParentProps<IHeadlineProps>) {
  const [enums, bools, rest, props] = splitProps(
    mergeProps({ appearance: APPEARANCE.Themed, size: SIZE.Medium }, p),
    ['size', 'appearance'],
    ['caps'],
    ['children']
  );
  return (
    <wc-headline
      {...props}
      size={enums.size}
      appearance={enums.appearance}
      caps={bools.caps || undefined}
    >
      {rest.children}
    </wc-headline>
  );
}

import { ParagraphComponent } from '@otmozorok/wc';
import { APPEARANCE, WCTAG } from '@otmozorok/wc/consts';
import type { IParagraphProps } from '../model';
import { mergeProps, ParentProps, splitProps } from 'solid-js';

customElements.get(WCTAG.Paragraph) || customElements.define(WCTAG.Paragraph, ParagraphComponent);

export function Paragraph(p: ParentProps<IParagraphProps>) {
  const [enums, bools, rest, props] = splitProps(
    mergeProps({ appearance: APPEARANCE.Themed }, p),
    ['appearance'],
    ['caps'],
    ['children']
  );

  return (
    <wc-paragraph appearance={enums.appearance} caps={bools.caps || undefined} {...props}>
      {rest.children}
    </wc-paragraph>
  );
}

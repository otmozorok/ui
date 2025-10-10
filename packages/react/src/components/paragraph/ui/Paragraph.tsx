import { ParagraphComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import type { IParagraphProps } from '../model';

customElements.get(WCTAG.Paragraph) || customElements.define(WCTAG.Paragraph, ParagraphComponent);

export function Paragraph({ children, appearance, caps, ...props }: IParagraphProps) {
  return (
    <wc-paragraph appearance={appearance} caps={caps || undefined} {...props}>
      {children}
    </wc-paragraph>
  );
}

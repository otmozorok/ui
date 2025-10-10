import { HeadlineComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import { IHeadlineProps } from '../model';

customElements.get(WCTAG.Headline) || customElements.define(WCTAG.Headline, HeadlineComponent);

export function Headline({ children, appearance, size, caps, ...props }: IHeadlineProps) {
  return (
    <wc-headline appearance={appearance} size={size} caps={caps || undefined} {...props}>
      {children}
    </wc-headline>
  );
}

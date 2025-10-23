import { HeadlineComponent } from '@otmozorok/wc';
import { SIZE, WCTAG } from '@otmozorok/wc/consts';
import type { IHeadlineProps } from '../model';

customElements.get(WCTAG.Headline) || customElements.define(WCTAG.Headline, HeadlineComponent);

export function Headline({
  children,
  caps,
  size,
  appearance,
  ...props
}: React.PropsWithChildren<IHeadlineProps>) {
  return (
    <wc-headline size={size} appearance={appearance} caps={caps || undefined} {...props}>
      {children}
    </wc-headline>
  );
}

import { HeadlineComponent } from '@otmozorok/wc';
import { SIZE, WCTAG } from '@otmozorok/wc/consts';
import type { IHeadlineProps } from '../model';

customElements.get(WCTAG.Headline) || customElements.define(WCTAG.Headline, HeadlineComponent);

export const Headline: React.FC<React.PropsWithChildren<IHeadlineProps>> = ({
  children,
  caps,
  size,
  appearance,
  ...props
}) => {
  return (
    <wc-headline size={size} appearance={appearance} caps={caps || undefined} {...props}>
      {children}
    </wc-headline>
  );
};

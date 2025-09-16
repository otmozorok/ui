import { HeadlineComponent } from '@otmozorok/wc';
import { SIZE, WCTAG } from '@otmozorok/wc/consts';

if (!customElements.get(WCTAG.Headline)) {
  customElements.define(WCTAG.Headline, HeadlineComponent);
}

export interface IHeadlineProps extends React.ComponentPropsWithoutRef<'div'> {
  size?: (typeof SIZE)[keyof typeof SIZE];
}

export const Headline: React.FC<React.PropsWithChildren<IHeadlineProps>> = ({
  children,
  size,
  ...props
}) => {
  return (
    <wc-headline size={size} {...props}>
      {children}
    </wc-headline>
  );
};

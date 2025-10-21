import { AccordionComponent, IconComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import type { IAccordionProps } from '../model';

customElements.get(WCTAG.Accordion) || customElements.define(WCTAG.Accordion, AccordionComponent);
customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

export const Accordion: React.FC<React.PropsWithChildren<IAccordionProps>> = ({
  children,
  ...props
}) => {
  return <wc-accordion {...props}>{children}</wc-accordion>;
};

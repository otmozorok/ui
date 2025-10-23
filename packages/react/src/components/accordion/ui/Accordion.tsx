import { AccordionComponent, IconComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import type { IAccordionProps } from '../model';

customElements.get(WCTAG.Accordion) || customElements.define(WCTAG.Accordion, AccordionComponent);
customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

export function Accordion({ children, ...props }: React.PropsWithChildren<IAccordionProps>) {
  return <wc-accordion {...props}>{children}</wc-accordion>;
}

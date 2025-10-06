import { AccordionComponent, IconComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import { IAccordionProps } from '../model';
import { Headline } from '../../headline';

customElements.get(WCTAG.Accordion) || customElements.define(WCTAG.Accordion, AccordionComponent);
customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

export function Accordion({ children, title, ...props }: IAccordionProps) {
  return (
    <wc-accordion {...props}>
      <Headline slot="header">{title}</Headline>
      {children}
    </wc-accordion>
  );
}

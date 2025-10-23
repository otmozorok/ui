import { AccordionComponent, IconComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import { ParentProps, splitProps } from 'solid-js';
import type { IAccordionProps } from '../model';

customElements.get(WCTAG.Accordion) || customElements.define(WCTAG.Accordion, AccordionComponent);
customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

export function Accordion(p: ParentProps<IAccordionProps>) {
  const [rest, props] = splitProps(p, ['children']);
  return <wc-accordion {...props}>{rest.children}</wc-accordion>;
}

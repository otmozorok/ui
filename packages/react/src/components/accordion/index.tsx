import { AccordionComponent, IconComponent, WCTAG } from '@otmozorok/wc';

if (!customElements.get(WCTAG.Accordion)) {
  customElements.define(WCTAG.Accordion, AccordionComponent);
}

if (!customElements.get(WCTAG.Icon)) {
  customElements.define(WCTAG.Icon, IconComponent);
}

export interface IAccordionProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Accordion: React.FC<React.PropsWithChildren<IAccordionProps>> = ({
  children,
  ...props
}) => {
  return <wc-accordion {...props}>{children}</wc-accordion>;
};

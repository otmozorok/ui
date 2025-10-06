import { ComponentPropsWithoutRef, ReactNode } from 'preact/compat';

export interface IAccordionProps extends ComponentPropsWithoutRef<'div'> {
  children?: ReactNode;
  title: string;
}

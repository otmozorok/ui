import { COL, ROW } from '@otmozorok/wc/consts';
import { ComponentPropsWithoutRef } from 'preact/compat';

export interface IGridProps extends ComponentPropsWithoutRef<'div'> {
  rows?: (typeof ROW)[keyof typeof ROW];
  cols?: (typeof COL)[keyof typeof COL];
  gap?: number;
}

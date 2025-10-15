import { COL, ROW } from '@otmozorok/wc/consts';

export interface IGridProps extends React.ComponentPropsWithoutRef<'div'> {
  rows?: (typeof ROW)[keyof typeof ROW];
  cols?: (typeof COL)[keyof typeof COL];
  gap?: number;
}

import { GridComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import type { IGridProps } from '../model';

customElements.get(WCTAG.Grid) || customElements.define(WCTAG.Grid, GridComponent);

export function Grid({ cols, rows, gap, children, ...props }: IGridProps) {
  return (
    <wc-grid cols={cols} rows={rows} gap={gap} {...props}>
      {children}
    </wc-grid>
  );
}

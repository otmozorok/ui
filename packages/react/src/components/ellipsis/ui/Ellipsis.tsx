import { EllipsisComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import type { IEllipsisProps } from '../model';

customElements.get(WCTAG.Ellipsis) || customElements.define(WCTAG.Ellipsis, EllipsisComponent);

export function Ellipsis({ maxLines, children, ...props }: IEllipsisProps) {
  return (
    <wc-ellipsis max-lines={maxLines} {...props}>
      {children}
    </wc-ellipsis>
  );
}

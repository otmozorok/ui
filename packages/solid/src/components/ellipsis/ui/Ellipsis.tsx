import { EllipsisComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import { mergeProps, type ParentProps, splitProps } from 'solid-js';
import type { IEllipsisProps } from '../model';

customElements.get(WCTAG.Ellipsis) || customElements.define(WCTAG.Ellipsis, EllipsisComponent);

export function Ellipsis(p: ParentProps<IEllipsisProps>) {
  const [enums, rest, props] = splitProps(
    mergeProps({ maxLines: 1 }, p),
    ['maxLines'],
    ['children']
  );

  return (
    <wc-ellipsis max-lines={enums.maxLines} {...props}>
      {rest.children}
    </wc-ellipsis>
  );
}

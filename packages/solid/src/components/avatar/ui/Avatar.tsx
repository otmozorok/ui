import { mergeProps, ParentProps, splitProps } from 'solid-js';
import { AvatarComponent, IconComponent } from '@otmozorok/wc';
import { COLOR, SHAPE, WCATTR, WCTAG } from '@otmozorok/wc/consts';
import { IAvatarProps } from '../model';

customElements.get(WCTAG.Avatar) || customElements.define(WCTAG.Avatar, AvatarComponent);
customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

export function Avatar(p: ParentProps<IAvatarProps>) {
  const [enums, nums, rest, props] = splitProps(
    mergeProps({ [WCATTR.Shape]: SHAPE.Circle, [WCATTR.Color]: COLOR.Blue, sizeNumber: 3 }, p),
    [WCATTR.Color, WCATTR.Shape],
    ['sizeNumber'],
    ['children']
  );

  return (
    <wc-avatar
      color={enums[WCATTR.Color]}
      shape={enums[WCATTR.Shape]}
      size-number={nums.sizeNumber}
      {...props}
    >
      {rest.children}
    </wc-avatar>
  );
}

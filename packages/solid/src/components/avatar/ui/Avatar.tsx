import { mergeProps, ParentProps, splitProps } from 'solid-js';
import { AvatarComponent, IconComponent } from '@otmozorok/wc';
import { COLOR, SHAPE, WCTAG } from '@otmozorok/wc/consts';
import { IAvatarProps } from '../model';

customElements.get(WCTAG.Avatar) || customElements.define(WCTAG.Avatar, AvatarComponent);
customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

export function Avatar(p: ParentProps<IAvatarProps>) {
  const [enums, nums, rest, props] = splitProps(
    mergeProps({ shape: SHAPE.Circle, color: COLOR.Blue, sizeNumber: 3 }, p),
    ['color', 'shape'],
    ['sizeNumber'],
    ['children']
  );

  return (
    <wc-avatar color={enums.color} shape={enums.shape} size-number={nums.sizeNumber} {...props}>
      {rest.children}
    </wc-avatar>
  );
}

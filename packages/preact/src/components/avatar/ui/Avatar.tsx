import { AvatarComponent, IconComponent } from '@otmozorok/wc';
import { COLOR, SHAPE, WCTAG } from '@otmozorok/wc/consts';
import { IAvatarProps } from '../model';

customElements.get(WCTAG.Avatar) || customElements.define(WCTAG.Avatar, AvatarComponent);
customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

export function Avatar({
  color = COLOR.Green,
  sizeNumber = 3,
  shape = SHAPE.Circle,
  children,
}: IAvatarProps) {
  return (
    <wc-avatar color={color} size-number={sizeNumber} shape={shape}>
      {children}
    </wc-avatar>
  );
}

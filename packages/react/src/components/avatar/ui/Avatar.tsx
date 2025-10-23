import { AvatarComponent, IconComponent } from '@otmozorok/wc';
import { COLOR, SHAPE, WCTAG } from '@otmozorok/wc/consts';
import type { IAvatarProps } from '../model';

customElements.get(WCTAG.Avatar) || customElements.define(WCTAG.Avatar, AvatarComponent);
customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

export function Avatar({
  children,
  color,
  shape,
  sizeNumber,
  ...props
}: React.PropsWithChildren<IAvatarProps>) {
  return (
    <wc-avatar color={color} shape={shape} size-number={sizeNumber} {...props}>
      {children}
    </wc-avatar>
  );
}

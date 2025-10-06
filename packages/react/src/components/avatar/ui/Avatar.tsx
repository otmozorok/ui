import { AvatarComponent, IconComponent } from '@otmozorok/wc';
import { COLOR, SHAPE, WCTAG } from '@otmozorok/wc/consts';
import type { IAvatarProps } from '../model';

customElements.get(WCTAG.Avatar) || customElements.define(WCTAG.Avatar, AvatarComponent);
customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

export const Avatar: React.FC<React.PropsWithChildren<IAvatarProps>> = ({
  children,
  color,
  shape,
  sizeNumber,
  src,
  ...props
}) => {
  return (
    <wc-avatar src={src} color={color} shape={shape} size-number={sizeNumber} {...props}>
      {children}
    </wc-avatar>
  );
};

import { AvatarComponent } from '@otmozorok/wc';
import { COLOR, WCTAG } from '@otmozorok/wc/consts';
import { IAvatarProps } from '../model';

customElements.get(WCTAG.Avatar) || customElements.define(WCTAG.Avatar, AvatarComponent);

export function Avatar({ src = '', color = COLOR.Green, size = 48, children }: IAvatarProps) {
  return (
    <wc-avatar src={src} color={color} size={size}>
      {children}
    </wc-avatar>
  );
}

import { IconComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import { IIconProps } from '../model';

customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

export function Icon({ name, ...props }: IIconProps) {
  return <wc-icon name={name} {...props}></wc-icon>;
}

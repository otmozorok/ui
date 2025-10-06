import { IconComponent } from '@otmozorok/wc';
import { ICON, WCTAG } from '@otmozorok/wc/consts';
import type { IIconProps } from '../model';

customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

export const Icon: React.FC<IIconProps> = ({ name, ...props }) => {
  return <wc-icon name={name} {...props}></wc-icon>;
};

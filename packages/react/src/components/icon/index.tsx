import { ICON, IconComponent, WCTAG } from '@otmozorok/wc';

if (!customElements.get(WCTAG.Icon)) {
  customElements.define(WCTAG.Icon, IconComponent);
}

interface IIconProps extends React.ComponentPropsWithoutRef<'div'> {
  name: (typeof ICON)[keyof typeof ICON];
}

export const Icon: React.FC<IIconProps> = ({ name, ...props }) => {
  return <wc-icon name={name} {...props}></wc-icon>;
};

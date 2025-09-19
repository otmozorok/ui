import { AvatarComponent, COLOR, IconComponent, SHAPE, WCTAG } from '@otmozorok/wc';

customElements.get(WCTAG.Avatar) || customElements.define(WCTAG.Avatar, AvatarComponent);
customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

export interface IAvatarProps extends React.ComponentPropsWithoutRef<'div'> {
  color?: (typeof COLOR)[keyof typeof COLOR];
  shape?: (typeof SHAPE)[keyof typeof SHAPE];
  sizeNumber?: number;
  src?: string;
}

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

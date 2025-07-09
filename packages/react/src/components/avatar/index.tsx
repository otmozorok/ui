import { AvatarComponent } from '@pappahapa/wc';
import { COLOR, WCTAG } from '@pappahapa/shared';
import React from 'react';

customElements.define(WCTAG.Avatar, AvatarComponent);

interface IAvatarProps {
  color?: COLOR;
  size?: number;
}

export const Avatar: React.FC<React.PropsWithChildren<IAvatarProps>> = ({
  children,
  color,
  size,
}) => {
  const ref = React.useRef<AvatarComponent>(null);

  React.useEffect(() => {
    if (!ref.current) return;

    if (color) ref.current.color = color;
    if (size) ref.current.size = size;
  }, [color, ref.current]);

  return <wc-avatar ref={ref}>{children}</wc-avatar>;
};

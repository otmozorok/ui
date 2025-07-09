import { COLOR } from '@pappahapa/shared';

interface IAvatarProps {
  src?: string;
  color?: COLOR;
  size?: number;
  children?: any;
}

export function Avatar({ src = '', color = COLOR.Green, size = 48, children }: IAvatarProps) {
  return (
    <wc-avatar src={src} color={color} size={size}>
      {children}
    </wc-avatar>
  );
}

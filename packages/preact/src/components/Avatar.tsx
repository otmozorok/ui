import { AvatarComponent } from '@wc/components';
import { COLOR, WCTAG } from '@wc/shared';

customElements.define(WCTAG.Avatar, AvatarComponent);

/**
 * Wrapper component for wc-avatar web component
 * @param {string} [src] - Image source URL
 * @param {string} [color=COLOR.Green] - Color theme (must match COLOR enum values)
 * @param {number} [size=48] - Size in pixels
 * @param {ReactNode} [children] - Content to show when no image is provided
 */
export function Avatar({
  src = '',
  color = COLOR.Green,
  size = 48,
  children,
}: {
  src?: string;
  color?: COLOR;
  size?: number;
  children?: any;
}) {
  return (
    <wc-avatar src={src} color={color} size={size}>
      {children}
    </wc-avatar>
  );
}

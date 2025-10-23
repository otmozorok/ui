import { BannerComponent, IconComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import { useEffect, useRef } from 'react';
import type { IBannerProps } from '../model';

customElements.get(WCTAG.Banner) || customElements.define(WCTAG.Banner, BannerComponent);
customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

export function Banner({ children, appearance, closable, onClose, ...props }: IBannerProps) {
  const banner = useRef<BannerComponent | null>(null);

  useEffect(() => {
    if (!banner.current) return;

    function handleClick(e: Event) {
      e.stopPropagation();
      onClose?.();
    }

    banner.current.addEventListener('close', handleClick);

    return () => {
      banner.current?.removeEventListener('close', handleClick);
    };
  }, [onClose]);

  return (
    <wc-banner ref={banner} appearance={appearance} closable={closable || undefined} {...props}>
      {children}
    </wc-banner>
  );
}

import { BannerComponent, IconComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import type { IBannerProps } from '../model';

customElements.get(WCTAG.Banner) || customElements.define(WCTAG.Banner, BannerComponent);
customElements.get(WCTAG.Icon) || customElements.define(WCTAG.Icon, IconComponent);

export function Banner({ appearance, closable, ...props }: IBannerProps) {
  return (
    <wc-banner appearance={appearance} closable={closable || undefined} {...props}></wc-banner>
  );
}

import { BannerComponent } from '@otmozorok/wc';
import { APPEARANCE, WCTAG } from '@otmozorok/wc/consts';
import { mergeProps, type ParentProps, splitProps } from 'solid-js';
import { IBannerProps } from '../model';

customElements.get(WCTAG.Banner) || customElements.define(WCTAG.Banner, BannerComponent);

export function Banner(p: ParentProps<IBannerProps>) {
  const [enums, bools, strs, rest, props] = splitProps(
    mergeProps({ appearance: APPEARANCE.Themed }, p),
    ['appearance'],
    ['closable'],
    ['image'],
    ['children']
  );

  return (
    <wc-banner
      appearance={enums.appearance}
      image={strs.image}
      closable={bools.closable || undefined}
      {...props}
    >
      {rest.children}
    </wc-banner>
  );
}

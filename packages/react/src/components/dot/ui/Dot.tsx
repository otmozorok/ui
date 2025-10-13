import { DotComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import type { IDotProps } from '../model';

customElements.get(WCTAG.Dot) || customElements.define(WCTAG.Dot, DotComponent);

export function Dot({ appearance, ...props }: IDotProps) {
  return <wc-dot appearance={appearance} {...props}></wc-dot>;
}

import { ContainerComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import type { IContainerProps } from '../model';

customElements.get(WCTAG.Container) || customElements.define(WCTAG.Container, ContainerComponent);

export function Container({ island, filled, fullWidth, children, ...props }: IContainerProps) {
  return (
    <wc-container
      island={island || undefined}
      filled={filled || undefined}
      full-width={fullWidth || undefined}
      {...props}
    >
      {children}
    </wc-container>
  );
}

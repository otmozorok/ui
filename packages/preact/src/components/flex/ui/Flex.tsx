import { FlexComponent } from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import { IFlexProps } from '../model';

customElements.get(WCTAG.Flex) || customElements.define(WCTAG.Flex, FlexComponent);

export function Flex({ alignItems, direction, gap, children, ...props }: IFlexProps) {
  return (
    <wc-flex align-items={alignItems} direction={direction} gap={gap} {...props}>
      {children}
    </wc-flex>
  );
}

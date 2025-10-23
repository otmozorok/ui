import { ButtonComponent, LoaderComponent } from '@otmozorok/wc';
import { APPEARANCE, MODE, SIZE, WCTAG } from '@otmozorok/wc/consts';
import { mergeProps, type ParentProps, splitProps } from 'solid-js';
import { IButtonProps } from '../model';

customElements.get(WCTAG.Button) || customElements.define(WCTAG.Button, ButtonComponent);
customElements.get(WCTAG.Loader) || customElements.define(WCTAG.Loader, LoaderComponent);

export function Button(p: ParentProps<IButtonProps>) {
  const [enums, bools, rest, props] = splitProps(
    mergeProps({ appearance: APPEARANCE.Themed }, p),
    ['mode', 'size', 'appearance'],
    ['loading', 'fullWidth'],
    ['children']
  );

  return (
    <wc-button
      appearance={enums.appearance}
      size={enums.size}
      mode={enums.mode}
      full-width={bools.fullWidth || undefined}
      loading={bools.loading || undefined}
      {...props}
    >
      {rest.children}
    </wc-button>
  );
}

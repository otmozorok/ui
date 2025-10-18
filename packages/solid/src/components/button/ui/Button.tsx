import { mergeProps, ParentProps, splitProps } from 'solid-js';
import { ButtonComponent, LoaderComponent } from '@otmozorok/wc';
import { APPEARANCE, MODE, SIZE, WCATTR, WCTAG } from '@otmozorok/wc/consts';
import { IButtonProps } from '../model';

customElements.get(WCTAG.Button) || customElements.define(WCTAG.Button, ButtonComponent);
customElements.get(WCTAG.Loader) || customElements.define(WCTAG.Loader, LoaderComponent);

export function Button(p: ParentProps<IButtonProps>) {
  const [enums, bools, rest, props] = splitProps(
    mergeProps({ [WCATTR.Appearance]: APPEARANCE.Themed }, p),
    [WCATTR.Mode, WCATTR.Size, WCATTR.Appearance],
    [WCATTR.Loading, WCATTR.FullWidth],
    ['children']
  );

  return (
    <wc-button
      appearance={enums[WCATTR.Appearance]}
      size={enums[WCATTR.Size]}
      mode={enums[WCATTR.Mode]}
      full-width={bools[WCATTR.FullWidth] || undefined}
      loading={bools[WCATTR.Loading] || undefined}
      {...props}
    >
      {rest.children}
    </wc-button>
  );
}

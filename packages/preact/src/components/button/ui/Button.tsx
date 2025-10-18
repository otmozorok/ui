import { ButtonComponent, LoaderComponent } from '@otmozorok/wc';
import { APPEARANCE, MODE, SIZE, WCTAG } from '@otmozorok/wc/consts';
import { IButtonProps } from '../model';

customElements.get(WCTAG.Button) || customElements.define(WCTAG.Button, ButtonComponent);
customElements.get(WCTAG.Loader) || customElements.define(WCTAG.Loader, LoaderComponent);

export function Button({
  children,
  appearance = APPEARANCE.Themed,
  mode = MODE.Primary,
  size = SIZE.Medium,
  loading,
  fullWidth,
  ...props
}: IButtonProps) {
  return (
    <wc-button
      appearance={appearance}
      mode={mode}
      size={size}
      loading={loading || undefined}
      full-width={fullWidth || undefined}
      {...props}
    >
      {children}
    </wc-button>
  );
}

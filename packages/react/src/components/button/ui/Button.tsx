import { ButtonComponent, LoaderComponent } from '@otmozorok/wc';
import { APPEARANCE, MODE, SIZE, WCTAG } from '@otmozorok/wc/consts';
import { useRef, useEffect } from 'react';
import type { IButtonProps } from '../model';

customElements.get(WCTAG.Button) || customElements.define(WCTAG.Button, ButtonComponent);
customElements.get(WCTAG.Loader) || customElements.define(WCTAG.Loader, LoaderComponent);

export function Button({
  children,
  appearance = APPEARANCE.Themed,
  mode = MODE.Primary,
  size = SIZE.Medium,
  loading,
  fullWidth,
  onClick,
  ...props
}: IButtonProps) {
  const ref = useRef<ButtonComponent>(null);

  useEffect(() => {
    if (!ref.current) return;

    function handleClick(e: Event) {
      e.stopPropagation();
      onClick?.();
    }

    ref.current.addEventListener('click', handleClick);

    return () => {
      ref.current?.removeEventListener('click', handleClick);
    };
  }, [onClick]);

  return (
    <wc-button
      ref={ref}
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

import { ButtonComponent } from '@otmozorok/wc';
import { MODE, SIZE, WCTAG } from '@otmozorok/wc/consts';
import { useRef, useEffect } from 'preact/hooks';
import { IButtonProps } from '../model';

customElements.get(WCTAG.Button) || customElements.define(WCTAG.Button, ButtonComponent);

export function Button({
  mode = MODE.Primary,
  size = SIZE.Medium,
  loading = false,
  fullwidth,
  onClick,
  children,
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
      {...props}
      mode={mode}
      size={size}
      loading={loading ? true : undefined}
      full-width={fullwidth ? true : undefined}
    >
      {children}
    </wc-button>
  );
}

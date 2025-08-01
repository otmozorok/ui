import { ButtonComponent } from '@pappahapa/wc';
import { MODE, SIZE } from '@pappahapa/shared';
import { useRef, useEffect } from 'preact/hooks';

interface IButtonProps {
  mode?: MODE;
  size?: SIZE;
  loading?: boolean;
  fullwidth?: boolean;
  onClick?: () => void;
  children?: any;
}

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
      fullwidth={fullwidth ? true : undefined}
    >
      {children}
    </wc-button>
  );
}

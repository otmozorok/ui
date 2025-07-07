import type { AvatarComponent } from '@wc/components';

declare global {
  // Расширяем стандартные HTML-теги
  namespace JSX {
    interface IntrinsicElements {
      'wc-avatar': React.DetailedHTMLProps<React.HTMLAttributes<AvatarComponent>, AvatarComponent>;
    }
  }
}

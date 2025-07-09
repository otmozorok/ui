import type { AvatarComponent } from '@pappahapa/wc';

declare global {
  // Расширяем стандартные HTML-теги
  namespace JSX {
    interface IntrinsicElements {
      'wc-avatar': React.DetailedHTMLProps<React.HTMLAttributes<AvatarComponent>, AvatarComponent>;
    }
  }
}

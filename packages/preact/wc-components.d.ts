import { JSX } from 'preact';

declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      'wc-avatar': Preact.DetailedHTMLProps<
        Preact.HTMLAttributes<AvatarComponent>,
        AvatarComponent
      >;
    }
  }
}

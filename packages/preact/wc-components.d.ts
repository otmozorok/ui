import { ButtonComponent, CounterComponent, LoaderComponent } from '@pappahapa/wc';
import { JSX } from 'preact';

declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      'wc-avatar': Preact.DetailedHTMLProps<
        Preact.HTMLAttributes<AvatarComponent>,
        AvatarComponent
      >;
      'wc-button': Preact.DetailedHTMLProps<
        Preact.HTMLAttributes<ButtonComponent>,
        ButtonComponent
      >;
      'wc-counter': Preact.DetailedHTMLProps<
        Preact.HTMLAttributes<CounterComponent>,
        CounterComponent
      >;
      'wc-loader': Preact.DetailedHTMLProps<
        Preact.HTMLAttributes<LoaderComponent>,
        LoaderComponent
      >;
    }
  }
}

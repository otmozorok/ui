import { ButtonComponent, CounterComponent, LoaderComponent } from '@otmozorok/wc';
import { JSX } from 'preact';

declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      'wc-avatar': Preact.DetailedHTMLProps<
        Preact.HTMLAttributes<{
          [WCATTR.Color]?: (typeof COLOR)[keyof typeof COLOR];
          [WCATTR.Shape]?: (typeof SHAPE)[keyof typeof SHAPE];
          [WCATTR.SizeNumber]?: number;
          [WCATTR.Src]?: string;
          children?: React.ReactNode;
        }>,
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

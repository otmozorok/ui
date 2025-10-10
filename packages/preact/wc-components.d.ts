import {
  AccordionComponent,
  ButtonComponent,
  CounterComponent,
  HeadlineComponent,
  IconComponent,
  LoaderComponent,
} from '@otmozorok/wc';
import { WCTAG } from '@otmozorok/wc/consts';
import { JSX } from 'preact';

declare module 'preact' {
  namespace JSX {
    interface IntrinsicElements {
      [WCTAG.Accordion]: Preact.DetailedHTMLProps<
        Preact.HTMLAttributes<AccordionComponent>,
        AccordionComponent
      >;
      [WCTAG.Avatar]: Preact.DetailedHTMLProps<
        Preact.HTMLAttributes<AvatarComponent>,
        AvatarComponent
      >;
      [WCTAG.Button]: Preact.DetailedHTMLProps<
        Preact.HTMLAttributes<ButtonComponent>,
        ButtonComponent
      >;
      [WCTAG.Counter]: Preact.DetailedHTMLProps<
        Preact.HTMLAttributes<CounterComponent>,
        CounterComponent
      >;
      [WCTAG.Loader]: Preact.DetailedHTMLProps<
        Preact.HTMLAttributes<LoaderComponent>,
        LoaderComponent
      >;
      [WCTAG.Headline]: Preact.DetailedHTMLProps<
        Preact.HTMLAttributes<HeadlineComponent>,
        HeadlineComponent
      >;
      [WCTAG.Icon]: Preact.DetailedHTMLProps<Preact.HTMLAttributes<IconComponent>, IconComponent>;
    }
  }
}

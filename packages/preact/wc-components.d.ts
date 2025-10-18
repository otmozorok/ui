import {
  AccordionComponent,
  BannerComponent,
  ButtonComponent,
  ContainerComponent,
  CounterComponent,
  EllipsisComponent,
  FlexComponent,
  GridComponent,
  HeadlineComponent,
  IconComponent,
  LoaderComponent,
  ParagraphComponent,
  SpanComponent,
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
      [WCTAG.Paragraph]: Preact.DetailedHTMLProps<
        Preact.HTMLAttributes<ParagraphComponent>,
        ParagraphComponent
      >;
      [WCTAG.Banner]: Preact.DetailedHTMLProps<
        Preact.HTMLAttributes<BannerComponent>,
        BannerComponent
      >;
      [WCTAG.Dot]: Preact.DetailedHTMLProps<Preact.HTMLAttributes<DotComponent>, DotComponent>;
      [WCTAG.Ellipsis]: Preact.DetailedHTMLProps<
        Preact.HTMLAttributes<EllipsisComponent>,
        EllipsisComponent
      >;
      [WCTAG.Container]: Preact.DetailedHTMLProps<
        Preact.HTMLAttributes<ContainerComponent>,
        ContainerComponent
      >;
      [WCTAG.Flex]: Preact.DetailedHTMLProps<Preact.HTMLAttributes<FlexComponent>, FlexComponent>;
      [WCTAG.Grid]: Preact.DetailedHTMLProps<Preact.HTMLAttributes<GridComponent>, GridComponent>;
      [WCTAG.Span]: Preact.DetailedHTMLProps<Preact.HTMLAttributes<SpanComponent>, SpanComponent>;
    }
  }
}

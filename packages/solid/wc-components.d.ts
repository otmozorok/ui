import type {
  AccordionComponent,
  AvatarComponent,
  HeadlineComponent,
  IconComponent,
  ButtonComponent,
  BannerComponent,
  ParagraphComponent,
  DotComponent,
  EllipsisComponent,
  ContainerComponent,
  FlexComponent,
  GridComponent,
  SpanComponent,
  LoaderComponent,
  CounterComponent,
} from '@otmozorok/wc';
import type {
  APPEARANCE,
  ALIGNITEM,
  COL,
  COLOR,
  DIRECTION,
  ICON,
  MODE,
  ROW,
  SHAPE,
  SIZE,
  WCATTR,
  WCTAG,
} from '@otmozorok/wc/consts';
import type { JSX, ParentProps } from 'solid-js';

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      [WCTAG.Accordion]: ParentProps<JSX.HTMLAttributes<HTMLDivElement>>;
      [WCTAG.Avatar]: ParentProps<
        {
          [WCATTR.Color]?: (typeof COLOR)[keyof typeof COLOR];
          [WCATTR.Shape]?: (typeof SHAPE)[keyof typeof SHAPE];
          [WCATTR.SizeNumber]?: number;
        } & JSX.HTMLAttributes<HTMLDivElement>
      >;
      [WCTAG.Button]: ParentProps<
        {
          [WCATTR.Appearance]?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
          [WCATTR.Size]?: (typeof SIZE)[keyof typeof SIZE];
          [WCATTR.Mode]?: (typeof MODE)[keyof typeof MODE];
          [WCATTR.Loading]?: boolean;
          [WCATTR.FullWidth]?: boolean;
        } & JSX.HTMLAttributes<HTMLButtonElement>
      >;
      [WCTAG.Headline]: ParentProps<
        {
          [WCATTR.Size]?: (typeof SIZE)[keyof typeof SIZE];
          [WCATTR.Appearance]?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
          [WCATTR.Caps]?: boolean;
        } & JSX.HTMLAttributes<HTMLHeadingElement>
      >;
      [WCTAG.Paragraph]: ParentProps<
        {
          [WCATTR.Appearance]?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
          [WCATTR.Caps]?: boolean;
        } & JSX.HTMLAttributes<HTMLParagraphElement>
      >;
      [WCTAG.Counter]: {
        [WCATTR.Appearance]?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
        [WCATTR.Rounded]?: boolean;
        [WCATTR.Inverse]?: boolean;
        [WCATTR.Value]: string;
      } & JSX.HTMLAttributes<HTMLDivElement>;
    }
  }
}

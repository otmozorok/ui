import type {
  AccordionComponent,
  AvatarComponent,
  APPEARANCE,
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
} from '@otmozorok/wc';
import type {
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

declare global {
  // Расширяем стандартные HTML-теги
  namespace JSX {
    interface IntrinsicElements {
      [WCTAG.Accordion]: React.DetailedHTMLProps<
        {
          children?: React.ReactNode;
        } & React.ComponentPropsWithoutRef<'div'>,
        AccordionComponent
      >;
      [WCTAG.Avatar]: React.DetailedHTMLProps<
        {
          [WCATTR.Color]?: (typeof COLOR)[keyof typeof COLOR];
          [WCATTR.Shape]?: (typeof SHAPE)[keyof typeof SHAPE];
          [WCATTR.SizeNumber]?: number;
          [WCATTR.Src]?: string;
          children?: React.ReactNode;
        } & React.ComponentPropsWithoutRef<'div'>,
        AvatarComponent
      >;
      [WCTAG.Button]: React.DetailedHTMLProps<
        {
          [WCATTR.Appearance]?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
          [WCATTR.Size]?: (typeof SIZE)[keyof typeof SIZE];
          [WCATTR.Mode]?: (typeof MODE)[keyof typeof MODE];
          [WCATTR.Loading]?: boolean;
          [WCATTR.FullWidth]?: boolean;
          children?: React.ReactNode;
        } & React.ComponentPropsWithoutRef<'button'>,
        ButtonComponent
      >;
      [WCTAG.Icon]: React.DetailedHTMLProps<
        {
          [WCATTR.Name]: (typeof ICON)[keyof typeof ICON];
        },
        IconComponent
      >;
      [WCTAG.Headline]: React.DetailedHTMLProps<
        {
          [WCATTR.Size]?: (typeof SIZE)[keyof typeof SIZE];
          [WCATTR.Appearance]?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
          [WCATTR.Caps]?: boolean;
          children?: React.ReactNode;
        } & React.ComponentPropsWithoutRef<'h1'>,
        HeadlineComponent
      >;
      [WCTAG.Banner]: React.DetailedHTMLProps<
        {
          [WCATTR.Appearance]?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
          [WCATTR.Closable]?: boolean;
          [WCATTR.Src]?: string;
        },
        BannerComponent
      >;
      [WCTAG.Paragraph]: React.DetailedHTMLProps<
        {
          [WCATTR.Appearance]?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
          [WCATTR.Caps]?: boolean;
          children?: React.ReactNode;
        } & React.ComponentPropsWithoutRef<'p'>,
        ParagraphComponent
      >;
      [WCTAG.Counter]: React.DetailedHTMLProps<
        {
          [WCATTR.Appearance]?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
          [WCATTR.Rounded]?: boolean;
          [WCATTR.Inverse]?: boolean;
          [WCATTR.Value]: string;
          children?: React.ReactNode;
        } & React.ComponentPropsWithoutRef<'div'>,
        CounterComponent
      >;
      [WCTAG.Dot]: React.DetailedHTMLProps<
        {
          [WCATTR.Appearance]?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
        } & React.ComponentPropsWithoutRef<'div'>,
        DotComponent
      >;
      [WCTAG.Ellipsis]: React.DetailedHTMLProps<
        {
          [WCATTR.MaxLines]?: number;
        } & React.ComponentPropsWithoutRef<'div'>,
        EllipsisComponent
      >;
      [WCTAG.Container]: React.DetailedHTMLProps<
        {
          [WCATTR.FullWidth]?: boolean;
          [WCATTR.Island]?: boolean;
          [WCATTR.Filled]?: boolean;
        } & React.ComponentPropsWithoutRef<'div'>,
        ContainerComponent
      >;
      [WCTAG.Flex]: React.DetailedHTMLProps<
        {
          [WCATTR.AlignItems]?: (typeof ALIGNITEM)[keyof typeof ALIGNITEM];
          [WCATTR.Direction]?: (typeof DIRECTION)[keyof typeof DIRECTION];
          [WCATTR.Gap]?: number;
        } & React.ComponentPropsWithoutRef<'div'>,
        FlexComponent
      >;
      [WCTAG.Grid]: React.DetailedHTMLProps<
        {
          [WCATTR.Rows]?: (typeof ROW)[keyof typeof ROW];
          [WCATTR.Cols]?: (typeof COL)[keyof typeof COL];
          [WCATTR.Gap]?: number;
        } & React.ComponentPropsWithoutRef<'div'>,
        GridComponent
      >;
    }
  }
}

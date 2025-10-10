import type {
  AccordionComponent,
  AvatarComponent,
  APPEARANCE,
  HeadlineComponent,
  IconComponent,
  ButtonComponent,
  BannerComponent,
} from '@otmozorok/wc';
import type { COLOR, ICON, MODE, SHAPE, SIZE, WCATTR, WCTAG } from '@otmozorok/wc/consts';

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
        } & React.ComponentPropsWithoutRef<'div'>,
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
        } & React.ComponentPropsWithoutRef<'div'>,
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
    }
  }
}

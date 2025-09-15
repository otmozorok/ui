import type {
  AccordionComponent,
  AvatarComponent,
  HeadlineComponent,
  IconComponent,
} from '@otmozorok/wc';
import { COLOR, ICON, SHAPE, SIZE, WCATTR, WCTAG } from '@otmozorok/wc/.shared';

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
      [WCTAG.Icon]: React.DetailedHTMLProps<
        {
          [WCATTR.Name]: (typeof ICON)[keyof typeof ICON];
        },
        IconComponent
      >;
      [WCTAG.Headline]: React.DetailedHTMLProps<
        {
          [WCATTR.Size]?: (typeof SIZE)[keyof typeof SIZE];
          children?: React.ReactNode;
        } & React.ComponentPropsWithoutRef<'div'>,
        HeadlineComponent
      >;
    }
  }
}

import { APPEARANCE, MODE, SIZE, WCATTR } from '@otmozorok/wc/consts';

export interface IButtonProps {
  [WCATTR.Mode]?: (typeof MODE)[keyof typeof MODE];
  [WCATTR.Size]?: (typeof SIZE)[keyof typeof SIZE];
  [WCATTR.Appearance]?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  [WCATTR.Loading]?: boolean;
  [WCATTR.FullWidth]?: boolean;
  'on:click'?: () => void;
}

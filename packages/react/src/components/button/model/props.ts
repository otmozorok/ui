import { APPEARANCE, MODE, SIZE } from '@otmozorok/wc/consts';

export interface IButtonProps {
  mode?: (typeof MODE)[keyof typeof MODE];
  size?: (typeof SIZE)[keyof typeof SIZE];
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  children?: any;
}

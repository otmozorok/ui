import { MODE, SIZE } from '@otmozorok/wc/consts';

export interface IButtonProps {
  mode?: (typeof MODE)[keyof typeof MODE];
  size?: (typeof SIZE)[keyof typeof SIZE];
  loading?: boolean;
  fullwidth?: boolean;
  onClick?: () => void;
  children?: any;
}

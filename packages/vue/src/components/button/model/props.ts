import { APPEARANCE, MODE, SIZE } from '@otmozorok/wc/consts';
import { HTMLAttributes } from 'vue';

export interface IButtonProps extends /* @vue-ignore */ HTMLAttributes {
  size?: (typeof SIZE)[keyof typeof SIZE];
  appearance?: (typeof APPEARANCE)[keyof typeof APPEARANCE];
  mode?: (typeof MODE)[keyof typeof MODE];
  loading?: boolean;
  fullWidth?: boolean;
}

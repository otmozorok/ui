import { COLOR } from '@otmozorok/wc/consts';
import type { Snippet } from 'svelte';

export interface IAvatarProps {
  src?: string;
  color?: (typeof COLOR)[keyof typeof COLOR];
  size?: number;
  children?: Snippet;
}

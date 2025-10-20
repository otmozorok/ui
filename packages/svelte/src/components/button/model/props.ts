import type { HTMLBaseAttributes } from 'svelte/elements';

export interface IButtonProps extends HTMLBaseAttributes {
  size?: 'small' | 'medium' | 'large';
}

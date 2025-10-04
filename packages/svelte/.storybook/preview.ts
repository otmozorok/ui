import type { Preview } from '@storybook/svelte-vite';
import { previewMain } from '@otmozorok/wc/consts';
import '@otmozorok/wc/style.css';
import '@otmozorok/wc/.storybook/style.css';

const preview: Preview = {
  ...previewMain,
};

export default preview;

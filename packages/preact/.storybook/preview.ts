import { previewMain } from '@otmozorok/wc/consts';
import type { Preview } from '@storybook/preact-vite';
import '@otmozorok/wc/style.css';
import '@otmozorok/wc/.storybook/style.css';

const preview: Preview = {
  ...previewMain,
};

export default preview;

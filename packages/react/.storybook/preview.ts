import type { Preview } from '@storybook/react-vite';
import '@otmozorok/wc/style.css';
import '@otmozorok/wc/.storybook/style.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

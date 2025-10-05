import { join, dirname } from 'path';
import { IS_DEV } from '../consts/index.js';

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type {import('storybook/internal/types').StorybookConfig} */
const config = {
  stories: ['../*.mdx', '../**/stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath('@storybook/addon-designs'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/html'),
    options: {},
  },

  docs: {
    defaultName: 'Описание',
  },

  core: {
    builder: getAbsolutePath('@storybook/builder-vite'),
    disableWhatsNewNotifications: false,
    disableTelemetry: true,
  },

  refs: {
    ...(IS_DEV
      ? {
          preact: {
            title: 'Preact Components',
            url: 'http://localhost:6002',
          },
          react: {
            title: 'React Components',
            url: 'http://localhost:6003',
          },
          svelte: {
            title: 'Svelte Components',
            url: 'http://localhost:6004',
          },
          vue: {
            title: 'Vue Components',
            url: 'http://localhost:6005',
          },
        }
      : {}),
  },
};

export default config;

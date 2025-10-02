import { join, dirname } from 'path';
import { IS_DEV } from '../consts/index.js';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
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
            url: 'http://localhost:6007',
          },
          react: {
            title: 'React Components',
            url: 'http://localhost:6008',
          },
          svelte: {
            title: 'Svelte Components',
            url: 'http://localhost:6009',
          },
          vue: {
            title: 'Vue Components',
            url: 'http://localhost:6010',
          },
        }
      : {}),
  },
};

export default config;

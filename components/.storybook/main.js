import { join, dirname } from 'path';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  stories: [
    '../*.mdx',
    '../**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../**/stories.@(js|jsx|mjs|ts|tsx)',
  ],

  addons: [
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-vitest'),
    getAbsolutePath("@storybook/addon-designs")
  ],

  framework: {
    name: getAbsolutePath('@storybook/html'),
    options: {},
  },

  core: {
    builder: getAbsolutePath('@storybook/builder-vite'),
    disableWhatsNewNotifications: true,
    disableTelemetry: true,
  },
};
export default config;

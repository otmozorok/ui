// This file has been automatically migrated to valid ESM format by Storybook.
import { createRequire } from "node:module";
import { join, dirname } from 'path';
import type { StorybookConfig } from 'storybook-solidjs-vite';

const require = createRequire(import.meta.url);

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-vitest'),
  ],
  docs: {
    defaultName: 'Описание',
  },
  framework: {
    name: getAbsolutePath('storybook-solidjs-vite'),
    options: {},
  },
};
export default config;

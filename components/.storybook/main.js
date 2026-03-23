import { mergeConfig } from 'vite';

/** @type {import('storybook/internal/types').StorybookConfig} */
const config = {
  stories: ['../*.mdx', '../**/stories.@(js|jsx|mjs|ts|tsx)', '../**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-vitest', '@storybook/addon-designs'],

  framework: {
    name: '@storybook/html-vite',
    options: { disableWhatsNewNotifications: false, disableTelemetry: true },
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      server: {
        cors: true,
      },
    });
  },

  docs: {
    defaultName: 'Описание',
  },
};

export default config;

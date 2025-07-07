import { playwrightLauncher } from '@web/test-runner-playwright';

export default {
  nodeResolve: true,
  files: 'test/**/*.test.js',
  browsers: [playwrightLauncher({ product: 'chromium' })],
  testFramework: {
    config: {
      timeout: 3000,
      ui: 'bdd',
    },
  },
};

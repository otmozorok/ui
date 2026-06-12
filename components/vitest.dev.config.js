import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    silent: true,
    include: ['**/*.?(spec|test).?(c|m)[jt]s?(x)'],
    environment: 'jsdom',
  },
});

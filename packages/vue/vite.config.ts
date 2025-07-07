import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Tell Vue to treat <wc-avatar> as a custom element
          isCustomElement: (tag) => tag === 'wc-avatar',
        },
      },
    }),
  ],
});

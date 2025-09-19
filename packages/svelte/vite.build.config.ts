import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), typescript({ tsconfig: './tsconfig.build.json' })],
  build: {
    minify: false,
    lib: {
      entry: 'src/index.ts',
      name: '@otmozorok/svelte',
      formats: ['es', 'cjs'],
      fileName: (format, name) => `${format}/${name}.js`,
    },
    rollupOptions: {
      external: ['svelte', 'svelte/internal', /^svelte$/, /^svelte\//, 'clsx', 'esm-env'],
      output: {
        dir: 'dist',
        preserveModules: true,
        preserveModulesRoot: 'src',
        assetFileNames: 'assets/style.[ext]',
        exports: 'named',
        globals: {
          svelte: 'Svelte',
          'svelte/internal': 'SvelteInternal',
        },
      },
    },
  },
});

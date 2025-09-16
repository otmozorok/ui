import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), typescript({ tsconfig: './tsconfig.build.json' })],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: '[name]',
    },
    rollupOptions: {
      external: ['preact', 'preact/*'],
      output: {
        format: 'esm',
        dir: 'dist',
        preserveModules: true,
        preserveModulesRoot: 'src',
        assetFileNames: 'assets/style.[ext]',
        exports: 'named',
      },
    },
  },
});

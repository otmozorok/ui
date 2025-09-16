import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), typescript({ tsconfig: './tsconfig.app.json' })],
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
      fileName: '[name]',
    },
    rollupOptions: {
      external: ['react', 'react/*'],
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

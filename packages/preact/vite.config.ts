import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), typescript({ tsconfig: './tsconfig.build.json' })],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@otmozorok/preact',
      formats: ['es', 'cjs'],
      fileName: (format, name) => `${format}/${name}.js`,
    },
    rollupOptions: {
      external: ['preact', 'preact/hooks', 'preact/compat', 'preact/jsx-runtime'],
      output: {
        dir: 'dist',
        preserveModules: true,
        preserveModulesRoot: 'src',
        assetFileNames: 'assets/style.[ext]',
        exports: 'named',
        globals: {
          preact: 'preact',
          'preact/hooks': 'preactHooks',
          'preact/compat': 'preactCompat',
          'preact/jsx-runtime': 'preactJsxRuntime',
        },
      },
    },
  },
});

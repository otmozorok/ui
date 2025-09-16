import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), typescript({ tsconfig: './tsconfig.app.json' })],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@otmozorok/react',
      formats: ['es', 'cjs'],
      fileName: (format, name) => `${format}/${name}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        dir: 'dist',
        preserveModules: true,
        preserveModulesRoot: 'src',
        assetFileNames: 'assets/style.[ext]',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});

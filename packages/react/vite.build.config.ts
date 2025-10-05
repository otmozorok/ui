import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import typescript from '@rollup/plugin-typescript';
import htmlMinifier from 'html-minifier-next';

async function asyncReplace(
  str: string,
  pattern: RegExp,
  replacer: (match: string, ...groups: string[]) => Promise<string>
): Promise<string> {
  const matches = Array.from(str.matchAll(pattern));
  let result = str;

  for (const match of matches) {
    const replacement = await replacer(match[0], ...match.slice(1));
    result = result.replace(match[0], replacement);
  }

  return result;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    typescript({ tsconfig: './tsconfig.build.json' }),
    {
      name: 'minify-html-css-strings',
      async transform(code, id) {
        if (!id.endsWith('.js') && !id.endsWith('.ts')) return;

        // Минификация HTML строк
        code = await asyncReplace(code, /html`([\s\S]*?)`/g, async (_match, htmlContent) => {
          const minified = await htmlMinifier.minify(htmlContent, {
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: true,
          });
          return `html\`${minified}\``;
        });

        return code;
      },
    },
  ],
  build: {
    minify: false,
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

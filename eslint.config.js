import js from '@eslint/js';
import { importX } from 'eslint-plugin-import-x';
import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import typescriptESLint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import globals from 'globals';
import svelteConfig from './packages/svelte/svelte.config.js';

export default [
  importX.flatConfigs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  {
    files: ['**/**/*.js'],
    ignores: [
      '**/dist/**',
      '**/types/**',
      '**/node_modules/**',
      '**/*.config.js',
      '**/.storybook/**',
    ],
    rules: {
      ...js.configs.recommended.rules,
      'import-x/no-unresolved': 'off',
      'import-x/named': 2,
      'import-x/namespace': 2,
      'import-x/default': 2,
      'import-x/export': 2,
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          alphabetize: {
            order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
            caseInsensitive: true /* ignore case. Options: [true, false] */,
          },
        },
      ],
    },
  },

  {
    files: ['**/**/*.{ts,tsx}'],
    ignores: ['**/dist/**', '**/node_modules/**', '**/*.config.ts', '**/*.d.ts'],
    languageOptions: {
      parser: typescriptParser,
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': typescriptESLint,
    },
    rules: {
      'import-x/no-unresolved': 'off',
      'import-x/named': 2,
      'import-x/namespace': 2,
      'import-x/default': 2,
      'import-x/export': 2,
      'import-x/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          alphabetize: {
            order: 'asc' /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
            caseInsensitive: true /* ignore case. Options: [true, false] */,
          },
        },
      ],
    },
  },

  {
    files: ['packages/svelte/**/**/*.svelte'],
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/*.config.ts',
      '**/*.config.js',
      '**/*.d.ts',
      '**/**/*.js',
    ],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: typescriptParser,
        svelteConfig,
      },
    },
    plugins: {
      svelte: svelte,
      '@typescript-eslint': typescriptParser,
    },
    rules: {
      ...svelte.configs.recommended.rules,
      'import-x/no-unresolved': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
];

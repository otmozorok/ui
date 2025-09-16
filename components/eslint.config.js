import { importX } from 'eslint-plugin-import-x';

/** @type {import('eslint').Linter.Config} */
export default [
  importX.flatConfigs.recommended,
  {
    files: ['**/*.js'],
    // Override or add rules here
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
];

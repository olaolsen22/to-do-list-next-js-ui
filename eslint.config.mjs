// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import storybook from 'eslint-plugin-storybook';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    files: ['**/*.test.ts', '**/*.test.tsx', '**/__tests__/**/*.ts'],
    ...compat.extends('plugin:jest/recommended'),
    rules: {
      'jest/no-disabled-tests': 'warn',
    },
  },
  {
    rules: {
      // Core ESLint Rules
      'arrow-body-style': ['error', 'as-needed'],
      'eol-last': 'error',
      eqeqeq: 'error',
      'no-console': 'warn',
      'no-shadow': 'off',
      'prefer-const': 'error',

      // Import Rules
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // TypeScript Rules
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { args: 'after-used', ignoreRestSiblings: true },
      ],

      // Accessibility Rules
      'jsx-a11y/tabindex-no-positive': 'error',
    },
  },
  ...storybook.configs['flat/recommended'],
];

export default eslintConfig;

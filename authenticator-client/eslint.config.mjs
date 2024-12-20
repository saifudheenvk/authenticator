// eslint.config.mjs
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import jestPlugin from 'eslint-plugin-jest';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['**/build/**', '**/dist/**', 'src/some/file/to/ignore.ts'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], // Specify TypeScript files
    env: {
      browser: true,
      es2015: true
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
          tsx: true
        },
        project: './tsconfig.json' // Specify the path to your tsconfig.json
      }
    },
    settings: {
      react: {
        version: 'detect'
      },
      jest: {
        version: 'detect',
        globalAliases: {
          describe: ['context'],
          fdescribe: ['fcontext'],
          xdescribe: ['xcontext']
        }
      }
    },
    plugins: {
      react,
      reactHooks,
      prettier,
      jest: jestPlugin,
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      semi: ['error', 'always'],
      'space-before-function-paren': 'off',
      camelcase: 'off',
      'no-return-assign': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      // TypeScript-specific rules
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  }
];

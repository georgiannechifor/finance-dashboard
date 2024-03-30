const { realpathSync } = require('fs');
const { resolve } = require('path');
const appDirectory = realpathSync(process.cwd());
const resolveApp = (relativePath) => resolve(appDirectory, relativePath);

const tsOverrides = [
  {
    files: ['**/*.{ts,tsx}'],
    extends: ['airbnb-typescript', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
    plugins: ['@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: resolveApp('tsconfig.eslint.json'),
      tsconfigRootDir: resolveApp('')
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/default-param-last': 'off',
      '@typescript-eslint/naming-convention': [
        'off',
        {
          leadingUnderscore: 'allow'
        }
      ],
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/vite.config.ts', '**/*.test.ts', '**/mocks/*.ts']
        }
      ]
    }
  }
];

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['jsx-a11y', 'import', 'sort-keys-fix', 'react-hooks', 'prettier', 'unused-imports'],
  extends: ['airbnb', 'eslint:recommended', 'plugin:jsx-a11y/recommended', 'plugin:react-hooks/recommended', 'prettier'],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  globals: {
    JSX: 'readonly'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'consistent-return': 'off',
    'default-case': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/mocks/*.js']
      }
    ],
    'import/no-named-as-default-member': 'off',
    'import/no-duplicates': 'error',
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
        pathGroups: [
          {
            pattern: '@assets/**',
            group: 'object',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: []
      }
    ],
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-alert': 'error',
    'no-console': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': 'off',
    'prettier/prettier': [
      'warn',
      {
        properties: {
          usePrettierrc: true
        }
      }
    ],
    'react/function-component-definition': [
      'warn',
      {
        namedComponents: ['function-declaration', 'function-expression', 'arrow-function']
      }
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': [
      'warn',
      {
        functions: 'ignore'
      }
    ]
  },
  overrides: tsOverrides
};

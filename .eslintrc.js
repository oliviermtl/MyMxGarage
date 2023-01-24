module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@react-native-community',
    'plugin:react/jsx-runtime',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true,
  },
  rules: {
    'react/no-unstable-nested-components': 0,
    'react-native/no-inline-styles': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: ['>', '}'],
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false,
      },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    semi: ['error', 'always'],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        jsxSingleQuote: false,
        printWidth: 100,
        semi: true,
      },
    ],
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/order': [
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
          order: 'asc',
        },
      },
    ],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  plugins: [
    'prettier',
    'react',
    'jsx-a11y',
    'eslint-plugin-prettier',
    'eslint-plugin-react',
    'eslint-plugin-react-hooks',
    'import',
    'unused-imports',
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.e2e.js'],
      env: {
        jest: true,
        'jest/globals': true,
      },
    },
  ],
  settings: {
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
};

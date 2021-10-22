module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:promise/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'prettier',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    jest: {
      version: 26,
    },
  },
  rules: {
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          object: 'off',
        },
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/quotes': ['error', 'single'],
    'import/no-default-export': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'eslint-comments/no-unused-disable': 'error',
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
        ],
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',

    'no-console': 'error',
    'react/jsx-props-no-spreading': 'off',
  },
};

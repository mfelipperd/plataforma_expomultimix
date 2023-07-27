module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', '@typescript-eslint'],
  extends: ['airbnb-typescript', 'plugin:@typescript-eslint/recommended'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    // Coloque quaisquer regras personalizadas aqui
  },
};

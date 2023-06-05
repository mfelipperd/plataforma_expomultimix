module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks'],
  extends: ['airbnb-typescript'],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  rules: {
    // Coloque quaisquer regras personalizadas aqui
  },
};

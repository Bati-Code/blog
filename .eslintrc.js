/** @type {import('eslint').Linter.Config} */
module.exports = {
  rules: {
    'no-unused-vars': 'on',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node'],
};

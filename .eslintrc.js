module.exports = {
  root: true,
  extends: ["@react-native-community", "plugin:storybook/recommended"],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [{
    files: ['*.ts', '*.tsx'],
    rules: {
      '@typescript-eslint/no-shadow': ['off'],
      'no-shadow': 'off',
      'no-undef': 'off',
      'prettier/prettier': ['error', {
        endOfLine: 'auto',
        bracketSpacing: true
      }]
    }
  }]
};
// ESlint config file
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'no-console': 1,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/prefer-default-export': 0,
    'no-unused-vars': [
      1,
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: 'res|next|^err',
      },
    ],
    'react/forbid-prop-types': 0,
  },
}

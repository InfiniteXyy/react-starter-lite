module.exports = {
  extends: [
    require.resolve('@vercel/style-guide/eslint/browser'),
    require.resolve('@vercel/style-guide/eslint/typescript'),
    require.resolve('@vercel/style-guide/eslint/react'),
  ],
  rules: {
    'react/jsx-no-undef': 'off',
    'react/jsx-sort-props': 'off',
    'import/no-default-export': 'off',
    'import/order': 'off',
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};

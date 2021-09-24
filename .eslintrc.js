module.exports = {
    parser: "babel-eslint",
    env: {
      browser: true,
      commonjs: true,
      es6: true,
      node: true,
      jest: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
      ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      sourceType: "module",
    },
    plugins: ["react", "react-hooks"],
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      indent: ['error', 2, {SwitchCase: 1}],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-console': ['warm', {allow: ['clear', 'info', 'error', 'dir', 'trace']}],
    },
  };
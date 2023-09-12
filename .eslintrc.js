module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "airbnb-base",
    "airbnb-typescript/base",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/indent": "off",
    "import/prefer-default-export": "off",
    "prettier/prettier": 'off',
    "comma-dangle": ["error", "never"],
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    "no-console": [
      "error",
      {
        allow: ["error", "info", "warn"],
      },
    ],
    "no-multi-spaces": ["error"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
  },
};

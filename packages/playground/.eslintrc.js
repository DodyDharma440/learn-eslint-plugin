module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["test"],
  rules: {
    "no-unused-vars": "warn",
  },
  extends: ["plugin:test/recommended"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
    },
  ],
};

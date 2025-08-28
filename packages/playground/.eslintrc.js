module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["test"],
  rules: {
    "no-unused-vars": "warn",
    "test/my-rule": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
    },
  ],
};

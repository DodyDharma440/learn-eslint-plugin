module.exports = {
  extends: "@dodidharma/test",
  parser: "vue-eslint-parser",
  plugins: ["vue"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaFeatures: {
      jsx: false,
    },
  },
};

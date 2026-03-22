import eslintConfig from "@cx/eslint-config";

export default [
  {
    ignores: ["dist/**"],
  },
  ...eslintConfig,
  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

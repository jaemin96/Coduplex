import eslintConfig from "@cx/eslint-config";

export default [
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/*.d.ts", "**/.next/**"],
  },
  ...eslintConfig,
];

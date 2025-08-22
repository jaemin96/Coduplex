// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import * as globals from "globals";
import tseslint from "typescript-eslint";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default tseslint.config(eslintPluginPrettierRecommended, {
  ignores: ["**/dist/**", "**/node_modules/**"],
  rules: {
    quotes: "off",
    // "prettier/prettier": [
    //   "warn",
    //   {
    //     printWidth: 120,
    //     bracketSameLine: false,
    //   },
    // ],
    "prettier/prettier": "off", // prettier lint 끄기
  },
}, // Server (Nest) 설정
{
  files: ["packages/api-server/**/*.{ts,js}"],
  languageOptions: {
    parser: tseslint.parser,
    globals: {
      ...globals.node,
      ...globals.jest,
    },
    parserOptions: {
      projectService: true,
      project: [path.resolve(__dirname, "packages", "api-server")],
      tsconfigRootDir: path.resolve(__dirname, "/tsconfig.json"),
    },
    sourceType: "commonjs",
  },
  plugins: {
    "@typescript-eslint": tseslint.plugin,
  },
  settings: {
    prettier: {
      configPath: path.resolve(__dirname, "prettier.config.mjs"),
    },
  },
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
  },
}, // Client (React) 설정
{
  files: ["packages/web-client/**/*.{ts,tsx,js,jsx}"],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      project: [path.resolve(__dirname, "packages/web-client/tsconfig.json")],
      tsconfigRootDir: path.resolve(__dirname, "packages", "web-client"),
    },
    globals: {
      ...globals.browser,
    },
  },
  settings: {
    next: {
      rootDir: path.resolve(__dirname, "packages", "web-client"),
    },
    prettier: {
      configPath: path.resolve(__dirname, "/prettier.config.mjs"),
    },
  },
  // eslint-disable-next-line prettier/prettier
}, storybook.configs["flat/recommended"]);

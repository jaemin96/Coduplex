import tseslint from "typescript-eslint";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default tseslint.config(
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/*.d.ts"],
  },
  {
    files: ["packages/web-client/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: path.resolve(
          __dirname,
          "packages/web-client/tsconfig.eslint.json"
        ),
        tsconfigRootDir: path.resolve(__dirname, "packages/web-client"),
      },
    },
  },
  {
    files: ["packages/ui/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: path.resolve(__dirname, "packages/ui/tsconfig.json"),
        tsconfigRootDir: path.resolve(__dirname, "packages/ui"),
      },
    },
  }
);

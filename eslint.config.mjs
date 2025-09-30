import { defineConfig } from "eslint/config";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function makePackageConfig(pkgName, tsconfigFile = "tsconfig.json") {
  return {
    files: [`packages/${pkgName}/**/*.{ts,tsx,js,jsx}`],
    ignores: ["packages/${pkgName}/.next/**"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: path.resolve(__dirname, `packages/${pkgName}/${tsconfigFile}`),
        tsconfigRootDir: path.resolve(__dirname, `packages/${pkgName}`),
      },
    },
  };
}

export default defineConfig(
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/*.d.ts", "**/.next/**"],
  },
  makePackageConfig("web-client", "tsconfig.eslint.json"),
  makePackageConfig("ui"),
  makePackageConfig("tailwind", "tsconfig.eslint.json"),
  makePackageConfig("dawntech", "tsconfig.eslint.json")
);

import tseslint from "typescript-eslint";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function makePackageConfig(pkgName, tsconfigFile = "tsconfig.json") {
  return {
    files: [`packages/${pkgName}/**/*.{ts,tsx,js,jsx}`],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: path.resolve(__dirname, `packages/${pkgName}/${tsconfigFile}`),
        tsconfigRootDir: path.resolve(__dirname, `packages/${pkgName}`),
      },
    },
  };
}

export default tseslint.config(
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/*.d.ts"],
  },
  makePackageConfig("web-client", "tsconfig.eslint.json"),
  makePackageConfig("ui"),
  makePackageConfig("dawntech")
);

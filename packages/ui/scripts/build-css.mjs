import * as sass from "sass";
import path from "path";
import fs from "fs";

const result = sass.compile("src/styles/scss/main.scss", {
  loadPaths: [path.resolve("src")],
  importers: [
    {
      findFileUrl(url) {
        if (url.startsWith("@styles/")) {
          const realPath = url.replace("@styles/", "styles/");
          return new URL(`file://${path.resolve("src", realPath)}`);
        }
        return null;
      },
    },
  ],
  style: "expanded",
});

// dist 폴더 없으면 만들기
fs.mkdirSync("dist", { recursive: true });

// CSS 파일 쓰기
fs.writeFileSync("dist/index.css", result.css);
console.log("✅ dist/index.css 생성 완료");

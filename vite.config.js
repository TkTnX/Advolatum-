import path from "path";
import fs from "fs";

function getHtmlEntries() {
  const pagesDir = path.resolve(__dirname, "./src/pages");
  const entries = {};

  const files = fs.readdirSync(pagesDir);

  const htmlFiles = files.filter((file) => file.endsWith(".html"));

  htmlFiles.forEach((file) => {
    const name = path.basename(file, ".html");
    entries[name] = path.resolve(pagesDir, file);
  });

  return entries;
}

export default {
  // Добавляем функцию getHtmlEntries в опции pages
  pages: getHtmlEntries(),
};

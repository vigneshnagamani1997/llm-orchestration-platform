import path from "path";

import fs from "fs-extra";

const SUPPORTED_EXTENSIONS = [
  ".ts",
  ".js",
  ".tsx",
  ".jsx",
  ".py",
  ".java",
  ".md"
];

async function walk(
  dir: string,
  results: string[] = []
): Promise<string[]> {

  const files =
    await fs.readdir(dir);

  for (const file of files) {

    const fullPath =
      path.join(dir, file);

    const stat =
      await fs.stat(fullPath);

    if (
      stat.isDirectory()
    ) {

      if (
        [
          "node_modules",
          ".git",
          "dist",
          "build"
        ].includes(file)
      ) {
        continue;
      }

      await walk(
        fullPath,
        results
      );

    } else {

      results.push(fullPath);

    }

  }

  return results;
}

export async function loadCodeFiles(
  repoPath: string
) {

  const files =
    await walk(repoPath);

  const results = [];

  for (const file of files) {

    const extension =
      path.extname(file);

    if (
      !SUPPORTED_EXTENSIONS.includes(
        extension
      )
    ) {
      continue;
    }

    try {

      const content =
        await fs.readFile(
          file,
          "utf-8"
        );

      results.push({
        path: file,
        extension,
        content
      });

    } catch (error) {

      console.error(
        `Failed reading ${file}`
      );

    }

  }

  return results;

}
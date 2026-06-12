import fs from 'fs/promises';
import path from 'path';

export async function getAllFiles(dir, baseDir = dir) {
  let results = [];
  const items = await fs.readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    const relativePath = path.relative(baseDir, fullPath);

    if (item.isDirectory()) {
      const subFiles = await getAllFiles(fullPath, baseDir);
      results = results.concat(subFiles);
    } else {
      results.push({
        name: item.name,
        path: fullPath,
        relativePath: relativePath,
        directory: path.dirname(relativePath),
      });
    }
  }

  return results;
}

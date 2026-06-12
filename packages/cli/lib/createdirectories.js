import fs from 'fs/promises';
import path from 'path';

export async function createDirectories(targetBaseDir, directories) {
  const uniqueDirs = [...new Set(directories.filter((dir) => dir !== '.'))];

  for (const dir of uniqueDirs) {
    const fullPath = path.join(targetBaseDir, dir);
    await fs.mkdir(fullPath, { recursive: true });
  }
}

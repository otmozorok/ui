import fs from 'fs/promises';
import path from 'path';
import process from 'process';
import url from 'url';
import chalk from 'chalk';
import inquirer from 'inquirer';
import { createDirectories } from '../lib/createdirectories.js';
import { getAllFiles } from '../lib/getallfiles.js';
import { processDirectoryPath } from '../lib/processdirectorypath.js';
import { processFileContent } from '../lib/processfilecontent.js';
import { processFileName } from '../lib/processfilename.js';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createCommand() {
  console.log('\nСоздание нового компонента\n');

  try {
    const snippetsPath = path.join(__dirname, '../snippets/create/');

    try {
      await fs.access(snippetsPath);
    } catch {
      console.error('Папка со сниппетами не найдена!');
      console.log(`Ожидается папка: ${snippetsPath}`);
    }

    const allFiles = await getAllFiles(snippetsPath);

    const snippetFiles = allFiles.filter((file) => {
      const basename = path.basename(file.name);
      return !basename.startsWith('.') && basename !== 'Thumbs.db';
    });

    if (snippetFiles.length === 0) {
      console.error('В папке со сниппетами нет файлов');
    }

    const filesByDir = snippetFiles.reduce((acc, file) => {
      const dir = file.directory === '.' ? 'Корневая папка' : file.directory;
      if (!acc[dir]) acc[dir] = [];
      acc[dir].push(file);
      return acc;
    }, {});

    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'savePath',
        message: 'Куда сохранить компонент? (путь от текущей директории):',
        validate: (input) => {
          if (!input.trim()) {
            return 'Путь не может быть пустым';
          }
          return true;
        },
      },
      {
        type: 'confirm',
        name: 'useFolderName',
        message: 'Использовать имя папки как имя компонента?',
        default: true,
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'Введите имя компонента:',
        when: (answers) => !answers.useFolderName,
        validate: (input) => {
          if (!input.trim()) {
            return 'Имя компонента не может быть пустым';
          }
          if (!/^[A-Z][a-zA-Z0-9]*$/.test(input)) {
            return 'Имя компонента должно начинаться с заглавной буквы и содержать только латинские буквы и цифры';
          }
          return true;
        },
      },
      {
        type: 'checkbox',
        name: 'selectedFiles',
        message: 'Выберите файлы для создания:',
        choices: (answers) => {
          const choices = [];
          Object.entries(filesByDir).forEach(([dir, files]) => {
            choices.push(new inquirer.Separator(`-- ${dir} --`));

            files.forEach((file) => {
              choices.push({
                name: `${processFileName(file.relativePath, answers.savePath)}`,
                value: file,
                checked: true,
              });
            });
          });
          return choices;
        },
        validate: (input) => {
          if (input.length === 0) {
            return 'Выберите хотя бы один файл';
          }
          return true;
        },
        pageSize: 20,
      },
      {
        type: 'confirm',
        name: 'preserveStructure',
        message: 'Сохранить структуру папок?',
        default: true,
      },
      {
        type: 'list',
        name: 'existingFileAction',
        message: 'Как поступать с существующими файлами?',
        choices: [
          { name: 'Спрашивать для каждого файла', value: 'ask' },
          { name: 'Перезаписывать все', value: 'overwrite' },
          { name: 'Пропускать все', value: 'skip' },
        ],
        default: 'ask',
      },
    ]);

    const targetDir = path.resolve(process.cwd(), answers.savePath);

    let componentName = answers.componentName;
    if (answers.useFolderName) {
      componentName = path.basename(targetDir);

      if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
        console.warn(
          `\nИмя папки ${chalk.cyan(componentName)} не соответствует формату имени компонента\n`
        );

        const { correctName } = await inquirer.prompt([
          {
            type: 'input',
            name: 'correctName',
            message: 'Введите корректное имя компонента (с заглавной буквы):',
            default: componentName
              .split('-')
              .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
              .join(''),
            validate: (input) => {
              if (!/^[A-Z][a-zA-Z0-9]*$/.test(input)) {
                return 'Имя компонента должно начинаться с заглавной буквы и содержать только латинские буквы и цифры';
              }
              return true;
            },
          },
        ]);
        componentName = correctName;
      }
    }

    console.log(`\nИмя компонента: ${chalk.cyan(componentName)}`);
    console.log(`Целевая папка: ${chalk.cyan(targetDir)}\n`);

    if (answers.preserveStructure) {
      const directories = answers.selectedFiles.map((file) => file.directory);
      await createDirectories(targetDir, directories);
    }

    const results = {
      created: [],
      skipped: [],
      errors: [],
    };

    for (const file of answers.selectedFiles) {
      try {
        const snippetContent = await fs.readFile(file.path, 'utf-8');
        const processedContent = processFileContent(snippetContent, componentName);
        let targetFilePath;

        if (answers.preserveStructure) {
          const processedDirectory = processDirectoryPath(file.directory, componentName);
          const processedFileName = processFileName(file.name, componentName);
          targetFilePath = path.join(targetDir, processedDirectory, processedFileName);
        } else {
          const processedFileName = processFileName(file.name, componentName);
          targetFilePath = path.join(targetDir, processedFileName);
        }

        const targetFileRelativePath = path.relative(targetDir, targetFilePath);
        let shouldWrite = true;
        try {
          await fs.access(targetFilePath);

          if (answers.existingFileAction === 'ask') {
            const { overwrite } = await inquirer.prompt([
              {
                type: 'confirm',
                name: 'overwrite',
                message: `Файл ${targetFileRelativePath} уже существует. Перезаписать?`,
                default: true,
              },
            ]);
            shouldWrite = overwrite;
          } else if (answers.existingFileAction === 'skip') {
            shouldWrite = false;
          }
        } catch {
          // go to next
        }

        if (shouldWrite) {
          await fs.writeFile(targetFilePath, processedContent, 'utf-8');
          results.created.push(targetFileRelativePath);
          console.log(`Создан файл: ${chalk.cyan(targetFileRelativePath)}`);
        } else {
          results.skipped.push(targetFileRelativePath);
          console.log(`Пропущен файл: ${chalk.cyan(targetFileRelativePath)}`);
        }
      } catch (error) {
        results.errors.push({ file: file.relativePath, error: error.message });
        console.error(`Ошибка при обработке ${chalk.red(file.relativePath)}:`, error.message);
      }
    }

    console.log('\nРезультат:');
    console.log(`Создано файлов: ${chalk.cyan(results.created.length)}`);
    if (results.skipped.length > 0) {
      console.log(`Пропущено файлов: ${chalk.cyan(results.skipped.length)}`);
    }
    if (results.errors.length > 0) {
      console.log(`Ошибок: ${chalk.red(results.errors.length)}`);
    }

    if (results.created.length > 0) {
      console.log(`\nКомпонент "${chalk.cyan(componentName)}" успешно создан!`);
    }
  } catch (error) {
    console.error('Произошла ошибка:', error.message);
  }
}

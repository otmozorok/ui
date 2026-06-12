export function processFileName(fileName, componentName) {
  const formats = {
    original: componentName,
    pascalCase: componentName,
    camelCase: componentName.charAt(0).toLowerCase() + componentName.slice(1),
    kebabCase: componentName
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/^-/, ''),
    snakeCase: componentName
      .replace(/([A-Z])/g, '_$1')
      .toLowerCase()
      .replace(/^_/, ''),
  };

  return fileName
    .replace(/{{componentName}}/g, formats.original)
    .replace(/{{ComponentName}}/g, formats.pascalCase)
    .replace(/{{componentNamePascal}}/g, formats.pascalCase)
    .replace(/{{componentNameCamel}}/g, formats.camelCase)
    .replace(/{{componentNameKebab}}/g, formats.kebabCase)
    .replace(/{{componentNameSnake}}/g, formats.snakeCase)
    .replace(/componentName/g, formats.camelCase)
    .replace(/ComponentName/g, formats.pascalCase);
}

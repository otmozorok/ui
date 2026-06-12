export function processDirectoryPath(dirPath, componentName) {
  const formats = {
    original: componentName,
    pascalCase: componentName,
    camelCase: componentName.charAt(0).toLowerCase() + componentName.slice(1),
    kebabCase: componentName
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/^-/, ''),
  };

  return dirPath
    .replace(/{{componentName}}/g, formats.original)
    .replace(/{{ComponentName}}/g, formats.pascalCase)
    .replace(/{{componentNameKebab}}/g, formats.kebabCase)
    .replace(/componentName/g, formats.camelCase)
    .replace(/ComponentName/g, formats.pascalCase);
}

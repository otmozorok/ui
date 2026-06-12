export function processFileContent(content, componentName) {
  // Разные форматы имени компонента
  const formats = {
    // Исходный формат (MyComponent)
    original: componentName,

    // С большой буквы (MyComponent) - то же самое, но для ясности
    pascalCase: componentName,

    // С маленькой буквы (myComponent)
    camelCase: componentName.charAt(0).toLowerCase() + componentName.slice(1),

    // Верхний регистр (MYCOMPONENT)
    upperCase: componentName.toUpperCase(),

    // Нижний регистр (mycomponent)
    lowerCase: componentName.toLowerCase(),

    // Кебаб-кейс (my-component)
    kebabCase: componentName
      .replace(/([A-Z])/g, '-$1')
      .toLowerCase()
      .replace(/^-/, ''),

    // Снейк-кейс (my_component)
    snakeCase: componentName
      .replace(/([A-Z])/g, '_$1')
      .toLowerCase()
      .replace(/^_/, ''),

    // Заголовочный кейс (My-Component)
    titleCase: componentName
      .replace(/([A-Z])/g, '-$1')
      .replace(/^-/, '')
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('-'),
  };

  return (
    content
      // Прямые замены для разных плейсхолдеров
      .replace(/{{componentName}}/g, formats.original)
      .replace(/{{ComponentName}}/g, formats.pascalCase)
      .replace(/{{componentNamePascal}}/g, formats.pascalCase)
      .replace(/{{componentNameCamel}}/g, formats.camelCase)
      .replace(/{{COMPONENT_NAME}}/g, formats.upperCase)
      .replace(/{{componentNameUpper}}/g, formats.upperCase)
      .replace(/{{componentNameLower}}/g, formats.lowerCase)
      .replace(/{{componentNameKebab}}/g, formats.kebabCase)
      .replace(/{{componentNameSnake}}/g, formats.snakeCase)
      .replace(/{{componentNameTitle}}/g, formats.titleCase)

      // Умные замены для разных паттернов в тексте
      .replace(/componentName/g, (match) => {
        // Если это не плейсхолдер в скобках, а просто текст
        if (match.includes('{{') || match.includes('}}')) return match;
        return formats.camelCase;
      })

      // Замены для импортов и экспортов
      .replace(/from ['"]\.\/componentName['"]/g, `from './${formats.camelCase}'`)
      .replace(/from ['"]\.\/ComponentName['"]/g, `from './${formats.pascalCase}'`)
  );
}

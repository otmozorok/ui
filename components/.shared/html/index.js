/**
 * Создает и возвращает содержимое HTML-шаблона на основе переданных данных.
 *
 * @param {TemplateStringsArray} data - Массив строковых частей шаблона (обычно передается автоматически).
 * @param {...string[]} values - Дополнительные значения, вставляемые в шаблон.
 * @returns {DocumentFragment} - Содержимое тега <template> из сгенерированного HTML.
 */
export function html(data, ...values) {
  const template = data.reduce(
    (acc, item, i) => (values[i] ? `${acc}${item}${values[i]}` : `${acc}${item}`),
    ''
  );
  const doc = new DOMParser().parseFromString(template, 'text/html');

  return doc.head.querySelector('template').content;
}

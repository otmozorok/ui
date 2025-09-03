/**
 * Создает и возвращает содержимое HTML-шаблона на основе переданных данных.
 *
 * @param {TemplateStringsArray} data - Массив строковых частей шаблона (обычно передается автоматически).
 * @param {...string[]} values - Дополнительные значения, вставляемые в шаблон.
 * @returns {DocumentFragment} - Содержимое тега <template> из сгенерированного HTML.
 */
export function html(data: TemplateStringsArray, ...values: string[][]): DocumentFragment;

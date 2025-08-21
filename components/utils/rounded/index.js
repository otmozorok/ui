/**
 * Форматирует число в компактное представление
 * (например, 1000 → 1K, 1000000 → 1M)
 * @param {number} value - Числовое значение для форматирования
 * @returns {string} - Строка с отформатированным числом в компактном виде
 */
export function rounded(value) {
  return Intl.NumberFormat('en', { notation: 'compact' }).format(value);
}

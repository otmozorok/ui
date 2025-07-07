export function rounded(value) {
  return Intl.NumberFormat('en', { notation: 'compact' }).format(value);
}

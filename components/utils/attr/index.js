export function toggleAttr(value, key, el) {
  if (value) {
    el[kebabToCamel(key)] = true;
  } else {
    el[kebabToCamel(key)] = false;
  }
}

export function setAttr(value, key, el) {
  if (value) {
    el[kebabToCamel(key)] = value;
  }
}

export function kebabToCamel(str) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

export function camelToKebab(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

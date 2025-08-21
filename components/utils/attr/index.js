export function toggleAttr(value, key, el) {
  if (value) {
    el.setAttribute(key, '');
  } else {
    el.removeAttribute(key);
  }
}

export function setAttr(value, key, el) {
  if (value) {
    el.setAttribute(key, value);
  }
}

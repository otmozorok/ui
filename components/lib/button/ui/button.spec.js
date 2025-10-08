import { describe, it, beforeEach, expect } from 'vitest';
import { APPEARANCE, MODE, SIZE, WCTAG } from '../../../consts/index.js';
import { ButtonComponent } from './index.js';

describe('ButtonComponent', () => {
  beforeEach(() => {
    if (!customElements.get(WCTAG.Button)) {
      customElements.define(WCTAG.Button, ButtonComponent);
    }
  });

  it('устанавливает значения по умолчанию', () => {
    const button = document.createElement(WCTAG.Button);

    document.body.appendChild(button);

    expect(button.mode).toBe(MODE.Primary);
    expect(button.appearance).toBe(APPEARANCE.Themed);
    expect(button.size).toBe(SIZE.Medium);
  });
});

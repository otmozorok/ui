import { describe, it, beforeEach, expect } from 'vitest';
import { WCTAG } from '../../../consts/index.js';
import { AccordionComponent } from './index.js';

describe('AccordionComponent', () => {
  beforeEach(() => {
    if (!customElements.get(WCTAG.Accordion)) {
      customElements.define(WCTAG.Accordion, AccordionComponent);
    }
  });

  it('реагирует на клик', () => {
    const accordion = document.createElement(WCTAG.Accordion);
    const summary = accordion.shadowRoot.querySelector('summary');
    const details = accordion.shadowRoot.querySelector('details');
    document.body.appendChild(accordion);

    summary.click();

    expect(details.hasAttribute('open')).toBe(true);
  });
});

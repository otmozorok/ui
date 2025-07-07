import { expect } from '@esm-bundle/chai';
import '../components/index.js';

describe('Accordion Component', () => {
  let accordion;

  beforeEach(async () => {
    accordion = document.createElement('wc-accordion');
    document.body.appendChild(accordion);
    await new Promise(requestAnimationFrame);
  });

  afterEach(() => {
    document.body.removeChild(accordion);
  });

  it('Развернуться при клике на заголовок', async () => {
    /**@type {HTMLElement} */
    const summary = accordion.shadowRoot.querySelector('summary');
    /**@type {HTMLDetailsElement} */
    const details = accordion.shadowRoot.querySelector('details');

    summary.click();

    expect(details.getAttribute('open')).to.equal('');
  });

  it('Свернуться при повторном клике на заголовок', async () => {
    /**@type {HTMLElement} */
    const summary = accordion.shadowRoot.querySelector('summary');
    /**@type {HTMLDetailsElement} */
    const details = accordion.shadowRoot.querySelector('details');

    summary.click();
    summary.click();

    expect(details.getAttribute('open')).to.equal(null);
  });
});

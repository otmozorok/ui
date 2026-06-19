import { WCATTR } from '../../../consts/index.js';
import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './sparkles.template.js';

/**
 * Sparkles
 * @link https://otmozorok.github.io/ui/?path=/docs/components-sparkles--docs
 */
export class SparklesComponent extends WebComponent {
  static observedAttributes = [WCATTR.Symbol, WCATTR.SymbolSize];

  constructor() {
    super(template, props);
  }

  connectedCallback() {
    super.connectedCallback();

    this.symbol = this.symbol || '✦';
    this.symbolSize = this.symbolSize || 0.5;
    const ANIMATION_DURATION = 5;
    const BUTTON_POSITIONS = [
      { x: 20, y: 0, size: 100, durationShift: 10 },
      { x: 15, y: 15, size: 75, durationShift: 70 },
      { x: 10, y: 35, size: 75, durationShift: 90 },
      { x: 20, y: 70, size: 125, durationShift: 30 },
      { x: 40, y: 10, size: 125, durationShift: 0 },
      { x: 45, y: 60, size: 75, durationShift: 60 },
      { x: 60, y: -10, size: 100, durationShift: 20 },
      { x: 55, y: 40, size: 75, durationShift: 60 },
      { x: 70, y: 65, size: 100, durationShift: 90 },
      { x: 80, y: 10, size: 75, durationShift: 30 },
      { x: 80, y: 45, size: 125, durationShift: 0 },
    ];

    BUTTON_POSITIONS.forEach((pos) => {
      const symbol = document.createElement('div');
      symbol.className = 'sparkles-symbol';
      symbol.textContent = this.symbol;
      symbol.setAttribute('aria-hidden', 'true');

      const shiftX = Math.cos(Math.atan2(-50 + pos.y, -50 + pos.x)) * 100;
      const shiftY = Math.sin(Math.atan2(-50 + pos.y, -50 + pos.x)) * 100;

      symbol.style.cssText = `
        top: ${pos.y}%;
        left: ${pos.x}%;
        scale: ${pos.size}%;
        --duration-shift: ${(-pos.durationShift / 100) * ANIMATION_DURATION}s;
        --shift-x: ${shiftX}%;
        --shift-y: ${shiftY}%;
      `;
      this.shadowRoot.appendChild(symbol);
    });
  }
}

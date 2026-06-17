import { WebComponent } from '../../../web-component/index.js';
import { props } from '../model/index.js';
import { template } from './ripple.template.js';

function debounce(func, wait) {
  let timeoutId = null;
  return function (...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(this, args);
      timeoutId = null;
    }, wait);
  };
}

/**
 * Ripple
 * @link https://otmozorok.github.io/ui/?path=/docs/components-ripple--docs
 */
export class RippleComponent extends WebComponent {
  static observedAttributes = [];

  constructor() {
    super(template, props);

    this.ripples = [];
    this.animationDurationMs = 500;
  }

  connectedCallback() {
    super.connectedCallback();

    this.$container = this.shadowRoot;
    this.$parent = this.parentElement;
    this.cleanUpDebounced = debounce(() => {
      this.clearRipples();
    }, this.animationDurationMs);

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.addEventListeners();
  }

  disconnectedCallback() {
    this.removeEventListeners();
  }

  clearRipples() {
    const waves = this.$container.querySelectorAll('.ripple-wave');
    waves.forEach((wave) => wave.remove());
    this.ripples = [];
  }

  handleMouseDown(e) {
    if (!this.$parent) return;

    const rect = this.$parent.getBoundingClientRect();
    const rippleSize = this.$parent.offsetWidth / 2;
    const x = e.clientX - rect.left - rippleSize / 2;
    const y = e.clientY - rect.top - rippleSize / 2;
    const wave = document.createElement('div');
    wave.className = 'ripple-wave';
    wave.style.cssText = `
      left: ${x}px;
      top: ${y}px;
      width: ${rippleSize}px;
      height: ${rippleSize}px;
    `;

    this.$container.appendChild(wave);
    this.ripples.push(wave);
    this.cleanUpDebounced();

    setTimeout(() => {
      if (wave.parentNode) {
        wave.remove();
        this.ripples = this.ripples.filter((w) => w !== wave);
      }
    }, this.animationDurationMs);
  }

  addEventListeners() {
    if (this.$parent) {
      this.$parent.addEventListener('mousedown', this.handleMouseDown);
    }
  }

  removeEventListeners() {
    if (this.$parent) {
      this.$parent.removeEventListener('mousedown', this.handleMouseDown);
    }
  }
}

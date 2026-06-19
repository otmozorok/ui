import { APPEARANCE, WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr } from '../../../utils/index.js';

const TITLE = 'Заголовок банера';
const DESCRIPTION = 'Съешь ещё этих мягких французских булок, да выпей чаю';

function render() {
  return () => {
    const el = document.createElement(WCTAG.Sparkles);

    return el;
  };
}

function renderWithButton() {
  return () => {
    const flex = document.createElement(WCTAG.Flex);
    const button = document.createElement(WCTAG.Button);
    const el = document.createElement(WCTAG.Sparkles);

    setAttr(APPEARANCE.Themed, WCATTR.Appearance, button);
    setAttr(1, WCATTR.Gap, flex);
    button.innerText = 'Я кнопка';
    button.append(el);

    flex.append(button.cloneNode(true));
    flex.append(button.cloneNode(true));

    return flex;
  };
}

function renderWithBanner() {
  return () => {
    const banner = document.createElement(WCTAG.Banner);
    const el = document.createElement(WCTAG.Sparkles);
    const h = document.createElement(WCTAG.Headline);
    const p = document.createElement(WCTAG.Paragraph);
    const div = document.createElement('div');

    div.style.cssText = `
      width: 50%;
      position: relative;
      z-index: 2;
    `;

    h.innerText = TITLE;
    p.innerText = DESCRIPTION;

    div.appendChild(h);
    div.appendChild(p);
    
    
    setAttr(APPEARANCE.Themed, WCATTR.Appearance, banner);
    setAttr(true, WCATTR.Closable, banner);
    setAttr('🍓', WCATTR.Symbol, el);
    setAttr(1, WCATTR.SymbolSize, el);
    banner.appendChild(el);
    banner.appendChild(div);

    return banner;
  };
}

export default {
  title: 'Effects/Sparkles',
  tags: ['autodocs'],
  render: render(),
  argTypes: {},
  args: {},
};

export const DefaultSparkles = {
  args: {},
};

export const SparklesWidthButton = {
  args: {},
  render: renderWithButton(),
};

export const SparklesWidthBanner = {
  args: {},
  render: renderWithBanner(),
};

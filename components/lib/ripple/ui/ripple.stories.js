import { APPEARANCE, WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr } from '../../../utils/index.js';

const TITLE = 'Заголовок банера';
const DESCRIPTION = 'Съешь ещё этих мягких французских булок, да выпей чаю';

function render() {
  return () => {
    const flex = document.createElement(WCTAG.Flex);
    const button = document.createElement(WCTAG.Button);
    const buttonWithRipple = document.createElement(WCTAG.Button);
    const el = document.createElement(WCTAG.Ripple);

    setAttr(APPEARANCE.Neutral, WCATTR.Appearance, buttonWithRipple);
    setAttr(APPEARANCE.Neutral, WCATTR.Appearance, button);
    setAttr(1, WCATTR.Gap, flex);
    buttonWithRipple.innerText = button.innerText = 'Я кнопка';
    buttonWithRipple.append(el);
    buttonWithRipple.style.cssText = `
      --button-overflow: hidden;
    `;

    flex.append(buttonWithRipple.cloneNode(true));
    flex.append(button.cloneNode(true));

    return flex;
  };
}

function renderWithBanner() {
  return () => {
    const banner = document.createElement(WCTAG.Banner);
    const el = document.createElement(WCTAG.Ripple);
    const h = document.createElement(WCTAG.Headline);
    const p = document.createElement(WCTAG.Paragraph);
    const div = document.createElement('div');

    div.style.width = '50%';

    h.innerText = TITLE;
    p.innerText = DESCRIPTION;

    div.appendChild(h);
    div.appendChild(p);
    banner.appendChild(div);
    banner.style.cssText = `
      --banner-overflow: hidden;
    `;

    setAttr(APPEARANCE.Themed, WCATTR.Appearance, banner);
    setAttr(true, WCATTR.Closable, banner);
    banner.appendChild(el);

    return banner;
  };
}

export default {
  title: 'Effects/Ripple',
  tags: ['autodocs'],
  render: render(),
  argTypes: {},
  args: {},
};

export const DefaultRipple = {
  args: {},
};

export const RippleWidthBanner = {
  args: {},
  render: renderWithBanner(),
};

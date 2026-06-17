import { APPEARANCE, SIZE, WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr } from '../../../utils/index.js';

const TITLE = 'Заголовок банера';
const DESCRIPTION = 'Съешь ещё этих мягких французских булок, да выпей чаю';

function render() {
  return (args) => {
    const flex = document.createElement(WCTAG.Flex);
    const button = document.createElement(WCTAG.Button);
    const el = document.createElement(WCTAG.Ripple);

    setAttr(APPEARANCE.Neutral, WCATTR.Appearance, button);
    setAttr(1, WCATTR.Gap, flex);
    button.innerText = 'Я кнопка';
    button.append(el);

    flex.append(button.cloneNode(true));
    flex.append(button.cloneNode(true));

    return flex;
  };
}

function renderWidthBanner() {
  return (args) => {
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
  render: renderWidthBanner(),
};

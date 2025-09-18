import { APPEARANCE, APPEARANCES, MODE, SIZE, WCATTR, WCTAG } from '../../consts/index.js';
import { setAttr, toggleAttr } from '../../utils/index.js';

export default {
  title: 'Components/Banner',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Banner);
    const h = document.createElement(WCTAG.Headline);
    const p = document.createElement(WCTAG.Paragraph);
    const div = document.createElement('div');

    h.size = SIZE.Large;
    div.style.width = '70%';

    setAttr(args[WCATTR.Appearance], WCATTR.Appearance, el);
    toggleAttr(args[WCATTR.Closable], WCATTR.Closable, el);

    h.innerText = 'This is a banner';
    p.innerText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    div.appendChild(h);
    div.appendChild(p);
    el.appendChild(div);

    return el;
  },
  argTypes: {
    [WCATTR.Appearance]: {
      control: { type: 'inline-radio' },
      type: {
        name: 'enum',
      },
      options: APPEARANCES,
      table: {
        defaultValue: { summary: APPEARANCE.Themed },
      },
    },
    [WCATTR.Closable]: {
      control: { type: 'boolean' },
      type: {
        name: 'boolean',
      },
    },
  },
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
  },
};

export const DefaultBanner = {};

export const BannerWithImage = {
  render: (args) => {
    const el = document.createElement(WCTAG.Banner);
    const h = document.createElement(WCTAG.Headline);
    const p = document.createElement(WCTAG.Paragraph);
    const div = document.createElement('div');

    h.size = SIZE.Large;
    div.style.width = '40%';

    setAttr(
      'https://camo.githubusercontent.com/5089aade831f565b6414567519fed5e50b3187753e3b95a1c0e521704768ccb5/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f32367842414d7964554c396c41397a4b552f67697068792e676966',
      WCATTR.Src,
      el
    );
    setAttr(args[WCATTR.Appearance], WCATTR.Appearance, el);
    toggleAttr(args[WCATTR.Closable], WCATTR.Closable, el);

    h.innerText = 'This is a banner';
    p.innerText =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    div.appendChild(h);
    div.appendChild(p);
    el.appendChild(div);

    return el;
  },
};

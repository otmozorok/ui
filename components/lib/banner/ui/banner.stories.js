import { fn } from 'storybook/test';
import pugImage from '../../../../assets/pug.gif';
import { APPEARANCE, APPEARANCES, WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr, toggleAttr } from '../../../utils/index.js';

const TITLE = 'Заголовок банера';
const DESCRIPTION = 'Съешь ещё этих мягких французских булок, да выпей чаю';

function render(withImage) {
  return (args) => {
    const el = document.createElement(WCTAG.Banner);
    const h = document.createElement(WCTAG.Headline);
    const p = document.createElement(WCTAG.Paragraph);
    const div = document.createElement('div');

    div.style.width = '50%';

    withImage && setAttr(pugImage, WCATTR.Image, el);
    setAttr(args[WCATTR.Appearance], WCATTR.Appearance, el);
    toggleAttr(args[WCATTR.Closable], WCATTR.Closable, el);

    h.innerText = TITLE;
    p.innerText = DESCRIPTION;

    div.appendChild(h);
    div.appendChild(p);
    el.appendChild(div);

    if (args.onClose) {
      el.addEventListener('close', () => {
        args.onClose();
      });
    }

    return el;
  };
}

export default {
  title: 'Components/Banner',
  tags: ['autodocs'],
  render: render(false),
  argTypes: {
    [WCATTR.Appearance]: {
      control: { type: 'inline-radio' },
      options: APPEARANCES,
      table: {
        defaultValue: { summary: APPEARANCE.Themed },
        category: 'props',
      },
    },
    [WCATTR.Closable]: {
      control: { type: 'boolean' },
      table: {
        category: 'props',
      },
    },
  },
  args: {
    onClose: fn(),
  },
};

export const DefaultBanner = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
  },
};

export const BannerWithImage = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
  },
  render: render(true),
};

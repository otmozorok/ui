import { APPEARANCE, APPEARANCES, SIZE, SIZES, WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr, toggleAttr } from '../../../utils/index.js';

export default {
  title: 'Typography/Paragraph',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Paragraph);

    toggleAttr(args[WCATTR.Caps], WCATTR.Caps, el);
    setAttr(args[WCATTR.Size], WCATTR.Size, el);
    setAttr(args[WCATTR.Appearance], WCATTR.Appearance, el);

    if (args.children) {
      el.innerText = args.children;
    }

    return el;
  },
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    [WCATTR.Appearance]: {
      control: { type: 'inline-radio' },
      options: APPEARANCES,
      table: {
        defaultValue: { summary: APPEARANCE.Themed },
      },
    },
    [WCATTR.Caps]: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const DefaultParagraph = {
  args: {
    children: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
};

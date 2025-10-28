import { APPEARANCE, APPEARANCES, WCATTR, WCTAG } from '../../../consts/index.js';
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
      table: {
        category: 'other',
      },
    },
    [WCATTR.Appearance]: {
      control: { type: 'inline-radio' },
      options: APPEARANCES,
      table: {
        defaultValue: { summary: APPEARANCE.Themed },
        category: 'props',
      },
    },
    [WCATTR.Caps]: {
      control: {
        type: 'boolean',
      },
      table: {
        category: 'props',
      },
    },
  },
};

export const DefaultParagraph = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    children: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
};

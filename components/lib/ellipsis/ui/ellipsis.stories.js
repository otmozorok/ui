import { WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr } from '../../../utils/index.js';

export default {
  title: 'Typography/Ellipsis',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Ellipsis);

    setAttr(args[WCATTR.MaxLines], WCATTR.MaxLines, el);

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
    [WCATTR.MaxLines]: {
      control: {
        type: 'number',
        min: 1,
        max: 3,
      },
      table: {
        category: 'props',
      },
    },
  },
};

export const DefaultEllipsis = {
  args: {
    children:
      'Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю. Съешь ещё этих мягких французских булок, да выпей чаю.',
    [WCATTR.MaxLines]: 1,
  },
};

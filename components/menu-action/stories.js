import { WCATTR, WCTAG } from '../.shared/index.js';
import { toggleAttr } from '../.storybook/utils.js';

export default {
  title: 'Menu/Menu/MenuAction',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.MenuAction);

    toggleAttr(args.negative, WCATTR.Negative, el);
    toggleAttr(args.compact, WCATTR.Compact, el);
    toggleAttr(args.arrow, WCATTR.Arrow, el);

    if (args.children) {
      el.innerText = args.children;
    }
    return el;
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      type: { name: 'string' },
    },
    negative: {
      control: {
        type: 'boolean',
      },
    },
    compact: {
      control: {
        type: 'boolean',
      },
    },
    arrow: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const DefaultMenuAction = {
  args: {
    children: 'Menu action',
    negative: false,
    compact: false,
    arrow: false,
  },
};

import { WCATTR, WCTAG } from '../../consts/index.js';
import { toggleAttr } from '../../utils/index.js';

export default {
  title: 'Components/Menu/MenuItem',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.MenuItem);

    toggleAttr(args[WCATTR.Compact], WCATTR.Compact, el);
    toggleAttr(args[WCATTR.Arrow], WCATTR.Arrow, el);

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
    [WCATTR.Compact]: {
      control: {
        type: 'boolean',
      },
    },
    [WCATTR.Arrow]: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const DefaultMenuItem = {
  args: {
    children: 'Menu item',
    [WCATTR.Compact]: false,
    [WCATTR.Arrow]: false,
  },
};

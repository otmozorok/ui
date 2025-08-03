import { WCATTR, WCTAG } from '../.shared/index.js';
import { toggleAttr } from '../.storybook/utils.js';

export default {
  title: 'Components/Menu/MenuItem',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.MenuItem);

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

export const DefaultMenuItem = {
  args: {
    children: 'Menu item',
    compact: false,
    arrow: false,
  },
};

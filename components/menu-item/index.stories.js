import { WCTAG } from '../.shared';
import { toggleAttr } from '../.storybook/utils';

export default {
  title: 'Меню/Menu/MenuItem',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.MenuItem);

    toggleAttr(args.compact, 'compact', el);
    toggleAttr(args.arrow, 'arrow', el);

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

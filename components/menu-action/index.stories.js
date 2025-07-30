import { WCTAG } from '../.shared';
import { toggleAttr } from '../.storybook/utils';

export default {
  title: 'Меню/Menu/MenuAction',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.MenuAction);

    toggleAttr(args.destructive, 'destructive', el);
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
    destructive: {
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
    destructive: false,
    compact: false,
    arrow: false,
  },
};

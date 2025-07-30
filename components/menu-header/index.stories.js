import { WCTAG } from '../.shared';
import { toggleAttr } from '../.storybook/utils';

export default {
  title: 'Menu/Menu/MenuHeader',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.MenuHeader);

    toggleAttr(args.caps, 'caps', el);
    toggleAttr(args.fullwidth, 'fullwidth', el);

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
    caps: {
      control: {
        type: 'boolean',
      },
    },
    fullwidth: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const DefaultMenuHeader = {
  args: {
    children: 'Menu header',
    caps: false,
    fullwidth: false,
  },
};

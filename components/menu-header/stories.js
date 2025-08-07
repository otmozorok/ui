import { WCATTR, WCTAG } from '../.shared/index.js';
import { toggleAttr } from '../.storybook/utils.js';

export default {
  title: 'Components/Menu/MenuHeader',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.MenuHeader);

    toggleAttr(args[WCATTR.Caps], WCATTR.Caps, el);
    toggleAttr(args[WCATTR.FullWidth], WCATTR.FullWidth, el);

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
    [WCATTR.Caps]: {
      control: {
        type: 'boolean',
      },
    },
    [WCATTR.FullWidth]: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export const DefaultMenuHeader = {
  args: {
    children: 'Menu header',
    [WCATTR.Caps]: false,
    [WCATTR.FullWidth]: false,
  },
};

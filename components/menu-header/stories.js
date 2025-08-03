import { WCATTR, WCTAG } from '../.shared/index.js';
import { toggleAttr } from '../.storybook/utils.js';

export default {
  title: 'Components/Menu/MenuHeader',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.MenuHeader);

    toggleAttr(args.caps, WCATTR.Caps, el);
    toggleAttr(args.fullwidth, WCATTR.FullWidth, el);

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

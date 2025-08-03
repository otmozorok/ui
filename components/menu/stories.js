import { WCATTR, WCTAG } from '../.shared/index.js';
import { setAttr, toggleAttr } from '../.storybook/utils.js';

export default {
  title: 'Menu/Menu',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Menu);
    const action = document.createElement(WCTAG.MenuAction);

    toggleAttr(args.island, WCATTR.Island, el);
    toggleAttr(args.filled, WCATTR.Filled, el);

    if (args.header) {
      const header = document.createElement(WCTAG.MenuHeader);

      toggleAttr(true, WCATTR.Caps, header);

      header.textContent = args.header;

      el.appendChild(header);
    }

    ['One action', 'Two action', 'Three action'].forEach((actionText, index) => {
      const clone = action.cloneNode(true);
      clone.textContent = actionText;
      setAttr(true, WCATTR.Arrow, clone);
      el.appendChild(clone);
    });

    return el;
  },
  argTypes: {
    island: {
      control: {
        type: 'boolean',
      },
    },
    filled: {
      control: {
        type: 'boolean',
      },
    },
    header: {
      control: { type: 'text' },
      type: { name: 'string' },
    },
  },
};

export const DefaultMenu = {
  args: {
    island: false,
    filled: false,
  },
};

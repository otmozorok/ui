import { WCTAG } from '../.shared';
import { setAttr, toggleAttr } from '../.storybook/utils';

export default {
  title: 'Menu/Menu',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Menu);
    const action = document.createElement(WCTAG.MenuAction);

    toggleAttr(args.island, 'island', el);
    toggleAttr(args.filled, 'filled', el);

    if (args.header) {
      const header = document.createElement(WCTAG.MenuHeader);

      toggleAttr('true', 'caps', header);

      header.textContent = args.header;

      el.appendChild(header);
    }

    ['One action', 'Two action', 'Three action'].forEach((actionText, index) => {
      const clone = action.cloneNode(true);

      clone.textContent = actionText;

      setAttr('true', 'arrow', clone);

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

import { WCATTR, WCTAG } from '../../consts/index.js';
import { setAttr, toggleAttr } from '../../utils/index.js';

export default {
  title: 'Components/Menu',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Menu);
    const action = document.createElement(WCTAG.MenuAction);

    toggleAttr(args[WCATTR.Island], WCATTR.Island, el);
    toggleAttr(args[WCATTR.Filled], WCATTR.Filled, el);

    if (args.header) {
      const header = document.createElement(WCTAG.MenuHeader);

      toggleAttr(true, WCATTR.Caps, header);

      header.textContent = args.header;

      el.appendChild(header);
    }

    ['One action', 'Two action', 'Three action'].forEach((actionText) => {
      const clone = action.cloneNode(true);
      clone.textContent = actionText;
      setAttr(true, WCATTR.Arrow, clone);
      el.appendChild(clone);
    });

    return el;
  },
  argTypes: {
    [WCATTR.Island]: {
      control: {
        type: 'boolean',
      },
    },
    [WCATTR.Filled]: {
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
    [WCATTR.Island]: false,
    [WCATTR.Filled]: false,
  },
};

import { WCATTR, WCTAG } from '../.shared/index.js';
import { toggleAttr } from '../.storybook/utils.js';

export default {
  title: 'Components/Menu/MenuAction',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.MenuAction);

    toggleAttr(args[WCATTR.Negative], WCATTR.Negative, el);
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
    [WCATTR.Negative]: {
      control: {
        type: 'boolean',
      },
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

export const DefaultMenuAction = {
  args: {
    children: 'Menu action',
    [WCATTR.Negative]: false,
    [WCATTR.Compact]: false,
    [WCATTR.Arrow]: false,
  },
};

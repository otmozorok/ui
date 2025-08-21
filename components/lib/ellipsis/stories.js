import { WCATTR, WCTAG } from '../../consts/index.js';
import { setAttr } from '../../utils/index.js';

export default {
  title: 'Typography/Ellipsis',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Ellipsis);

    setAttr(args[WCATTR.MaxLines], WCATTR.MaxLines, el);

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
    [WCATTR.MaxLines]: {
      control: {
        type: 'number',
        min: 1,
        max: 3,
      },
    },
  },
};

export const DefaultEllipsis = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    [WCATTR.MaxLines]: 1,
  },
};

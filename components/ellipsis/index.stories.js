import { WCTAG } from '../.shared/index.js';
import { setAttr } from '../.storybook/utils.js';

export default {
  title: 'Typography/Ellipsis',
  tags: ['autodocs'],
  render: (args, context) => {
    const el = document.createElement(WCTAG.Ellipsis);

    setAttr(args.maxLines, 'max-lines', el);

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
    maxLines: {
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
    maxLines: 1,
  },
};

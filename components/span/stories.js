import { WCTAG } from '../.shared/index.js';

export default {
  title: 'Typography/Span',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Span);

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
  },
};

export const DefaultSpan = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
};

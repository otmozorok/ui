import { WCTAG } from '../../consts/index.js';

export default {
  title: 'Typography/Paragraph',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Paragraph);

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

export const DefaultParagraph = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
};

import { SIZE, SIZES, WCTAG } from '../.shared';
import { setAttr } from '../.storybook/utils';

export default {
  title: 'Typography/Headline',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Headline);

    setAttr(args.size, 'size', el);

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
    size: {
      control: { type: 'inline-radio' },
      type: {
        name: 'enum',
      },
      options: SIZES,
    },
  },
  args: {
    children: 'Title text',
    size: SIZE.Medium,
  },
};

export const DefaultHeadline = {
  args: {
    children: 'Title text',
    size: SIZE.Medium,
  },
};

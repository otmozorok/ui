import { COLOR, COLORS, SIZE, SIZES, WCTAG } from '@pappahapa/shared';
import { setAttr } from '../.storybook/utils';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Типография/Headline',
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

export const Big = {
  name: 'Большой размер',
  args: {
    children: 'Title text',
    size: SIZE.Large,
  },
};

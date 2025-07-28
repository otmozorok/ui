import { SIZE, SIZES, WCTAG } from '../.shared';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Компоненты/Loader',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Loader);
    if (args.size) {
      el.setAttribute('size', args.size);
    }
    return el;
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: SIZES,
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground = {
  args: {
    size: SIZE.Medium,
  },
};

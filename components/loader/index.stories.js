import { SIZE, SIZES, WCTAG } from '../.shared';

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

export const DefaultLoader = {
  args: {
    size: SIZE.Medium,
  },
};

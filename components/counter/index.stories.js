import { WCTAG } from '../.shared';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Компоненты/Counter',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Counter);
    if (args.count) {
      el.setAttribute('count', args.count);
    }
    if (args.rounded) {
      el.setAttribute('rounded', '');
    } else {
      el.removeAttribute('rounded');
    }
    if (args.inverse) {
      el.setAttribute('inverse', '');
    } else {
      el.removeAttribute('inverse');
    }
    if (args.destructive) {
      el.setAttribute('destructive', '');
    } else {
      el.removeAttribute('destructive');
    }
    return el;
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Playground = {
  args: {
    count: 10000,
    rounded: false,
    inverse: false,
    destructive: false,
  },
};

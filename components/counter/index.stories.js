import { WCTAG } from '../.shared';

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

export const DefaultCounter = {
  args: {
    count: 10000,
    rounded: false,
    inverse: false,
    destructive: false,
  },
};

import { WCTAG } from '../.shared';

export default {
  title: 'Меню/Menu/MenuItem',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.MenuItem);
    if (args.childrent) {
      el.innerText = args.childrent;
    }
    return el;
  },
};

export const DefaultMenuItem = {
  args: {
    childrent: 'Test',
  },
};

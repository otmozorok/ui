import { WCTAG } from '../.shared';

export default {
  title: 'Меню/Menu/MenuHeader',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.MenuHeader);
    if (args.childrent) {
      el.innerText = args.childrent;
    }
    return el;
  },
};

export const DefaultMenuHeader = {
  args: {
    childrent: 'Test',
  },
};

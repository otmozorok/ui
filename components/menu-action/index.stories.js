import { WCTAG } from '../.shared';

export default {
  title: 'Меню/Menu/MenuAction',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.MenuAction);
    if (args.childrent) {
      el.innerText = args.childrent;
    }
    return el;
  },
};

export const DefaultMenuAction = {
  args: {
    childrent: 'Test',
  },
};

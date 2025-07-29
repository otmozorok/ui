import { WCTAG } from '../.shared';

export default {
  title: 'Меню/Menu',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Menu);
    if (args.childrent) {
      el.innerText = args.childrent;
    }
    return el;
  },
};

export const DefaultMenu = {
  args: {
    childrent: 'Test',
  },
};

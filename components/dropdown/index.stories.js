import { WCTAG } from '../.shared';

export default {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Dropdown);
    if (args.childrent) {
      el.innerText = args.childrent;
    }
    return el;
  },
};

export const DefaultDropdown = {
  args: {
    childrent: 'Test',
  },
};

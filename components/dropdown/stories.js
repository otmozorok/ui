import { WCATTR, WCTAG } from '../.shared/index.js';
import { setAttr } from '../.storybook/utils.js';

export default {
  title: 'Components/Dropdown',
  tags: ['autodocs'],
  render: () => {
    const el = document.createElement(WCTAG.Dropdown);
    const menu = document.createElement(WCTAG.Menu);
    const menuAction = document.createElement(WCTAG.MenuAction);

    setAttr(true, WCATTR.Filled, menu);

    ['One action', 'Two action', 'Three action'].forEach((actionText, index) => {
      const clone = menuAction.cloneNode(true);
      clone.textContent = actionText;
      menu.appendChild(clone);
    });

    el.appendChild(menu);

    return el;
  },
};

export const DefaultDropdown = {};

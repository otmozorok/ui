import { WCATTR, WCTAG } from '../../consts/index.js';
import { toggleAttr } from '../../utils/index.js';

export default {
  title: 'Layouts/Container',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Container);

    toggleAttr(args[WCATTR.Island], WCATTR.Island, el);
    toggleAttr(args[WCATTR.Filled], WCATTR.Filled, el);
    toggleAttr(args[WCATTR.FullWidth], WCATTR.FullWidth, el);

    const skeleton = document.createElement('div');

    skeleton.classList.add('skeleton');

    [1, 2, 3].forEach(() => {
      el.appendChild(skeleton.cloneNode(true));
    });

    if (args.header) {
      const header = document.createElement(WCTAG.MenuHeader);

      toggleAttr(true, WCATTR.Caps, header);

      header.textContent = args.header;

      el.appendChild(header);
    }

    return el;
  },
  argTypes: {
    [WCATTR.Island]: {
      control: {
        type: 'boolean',
      },
    },
    [WCATTR.Filled]: {
      control: {
        type: 'boolean',
      },
    },
    [WCATTR.FullWidth]: {
      control: {
        type: 'boolean',
      },
    },
    header: {
      control: { type: 'text' },
      type: { name: 'string' },
    },
  },
};

export const DefaultContainer = {
  args: {
    [WCATTR.Island]: false,
    [WCATTR.Filled]: false,
  },
};

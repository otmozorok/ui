import { APPEARANCE, SIZE, WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr, toggleAttr } from '../../../utils/index.js';

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

    if (args.header) {
      const header = document.createElement(WCTAG.Headline);

      header.slot = 'header';

      toggleAttr(true, WCATTR.Caps, header);
      setAttr(SIZE.Small, WCATTR.Size, header);
      setAttr(APPEARANCE.Neutral, WCATTR.Appearance, header);

      header.textContent = args.header;

      el.appendChild(header);
    }

    [1, 2, 3].forEach(() => {
      el.appendChild(skeleton.cloneNode(true));
    });

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
    },
  },
};

export const DefaultContainer = {
  args: {
    [WCATTR.Island]: false,
    [WCATTR.Filled]: false,
  },
};

export const ContainerWithHeader = {
  args: {
    [WCATTR.Island]: false,
    [WCATTR.Filled]: false,
    header: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
};

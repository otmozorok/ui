import { ALIGNITEMS, DIRECTION, DIRECTIONS, WCATTR, WCTAG } from '../../consts/index.js';
import { setAttr } from '../../utils/index.js';

/** @type {import('@storybook/html').Meta} */
export default {
  title: 'Layouts/Flex',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Flex);
    const button = document.createElement(WCTAG.Button);
    const skeleton = document.createElement('div');

    button.innerText = 'Button';
    skeleton.classList.add('skeleton');

    setAttr(args[WCATTR.Gap], WCATTR.Gap, el);
    setAttr(args[WCATTR.Direction], WCATTR.Direction, el);
    setAttr(args[WCATTR.AlignItems], WCATTR.AlignItems, el);

    [1, 2, 3].forEach(() => {
      el.appendChild(skeleton.cloneNode(true));
    });

    el.appendChild(button);

    return el;
  },
  argTypes: {
    [WCATTR.Direction]: {
      control: { type: 'inline-radio' },
      options: DIRECTIONS,
      table: {
        defaultValue: {
          summary: DIRECTION.Horizontal,
        },
      },
    },
    [WCATTR.AlignItems]: {
      control: { type: 'inline-radio' },
      options: ALIGNITEMS,
    },
    [WCATTR.Gap]: {
      control: { type: 'text' },
    },
  },
};

/** @type {import('@storybook/html').StoryObj} */
export const DefaultFlex = {
  args: {
    [WCATTR.Direction]: DIRECTION.Horizontal,
  },
};

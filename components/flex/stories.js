import { DIRECTION, DIRECTIONS, WCATTR, WCTAG } from '../.shared/index.js';
import { setAttr } from '../.storybook/utils.js';

/** @type {import('@storybook/html').Meta} */
export default {
  title: 'Layouts/Flex',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Flex);
    const skeleton = document.createElement('div');

    skeleton.classList.add('skeleton');

    setAttr(args[WCATTR.Gap], WCATTR.Gap, el);
    setAttr(args[WCATTR.Direction], WCATTR.Direction, el);

    [1, 2, 3].forEach(() => {
      el.appendChild(skeleton.cloneNode(true));
    });

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

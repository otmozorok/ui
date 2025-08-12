import { COLS, ROWS, WCATTR, WCTAG } from '../.shared/index.js';
import { setAttr } from '../.storybook/utils.js';

/** @type {import('@storybook/html').Meta} */
export default {
  title: 'Layouts/Grid',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Grid);
    const skeleton = document.createElement('div');

    skeleton.classList.add('skeleton');

    setAttr(args[WCATTR.Cols], WCATTR.Cols, el);
    setAttr(args[WCATTR.Rows], WCATTR.Rows, el);
    setAttr(args[WCATTR.Gap], WCATTR.Gap, el);

    [1, 2, 3].forEach(() => {
      el.appendChild(skeleton.cloneNode(true));
    });

    return el;
  },
  argTypes: {
    [WCATTR.Cols]: {
      control: { type: 'select' },
      options: COLS,
      table: {
        defaultValue: { summary: 2 },
      },
    },
    [WCATTR.Rows]: {
      control: { type: 'select' },
      options: ROWS,
    },
    [WCATTR.Gap]: {
      control: { type: 'text' },
    },
  },
  args: {
    [WCATTR.Cols]: 2,
  },
};

export const DefaultGrid = {
  args: {
    [WCATTR.Cols]: 2,
  },
};

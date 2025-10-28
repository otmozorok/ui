import { COLS, ROWS, WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr } from '../../../utils/index.js';

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
        category: 'props',
      },
    },
    [WCATTR.Rows]: {
      control: { type: 'select' },
      options: ROWS,
      table: {
        category: 'props',
      },
    },
    [WCATTR.Gap]: {
      control: { type: 'text' },
      table: {
        category: 'props',
      },
    },
  },
};

export const DefaultGrid = {
  args: {
    [WCATTR.Cols]: 2,
  },
};

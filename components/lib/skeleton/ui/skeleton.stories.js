import { SHAPE, SHAPES, SIZE, WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr } from '../../../utils/index.js';

function render() {
  return (args) => {
    const el = document.createElement(WCTAG.Skeleton);

    setAttr(args[WCATTR.Width], WCATTR.Width, el);
    setAttr(args[WCATTR.Height], WCATTR.Height, el);
    setAttr(args[WCATTR.Shape], WCATTR.Shape, el);

    return el;
  };
}

function renderWithText() {
  return (args) => {
    const wrapper = document.createElement('div');
    const h = document.createElement(WCTAG.Headline);
    const h2 = document.createElement(WCTAG.Headline);
    const p = document.createElement(WCTAG.Paragraph);
    const p2 = document.createElement(WCTAG.Paragraph);
    const p3 = document.createElement(WCTAG.Paragraph);
    const el = document.createElement(WCTAG.Skeleton);
    const el2 = document.createElement(WCTAG.Skeleton);
    const el3 = document.createElement(WCTAG.Skeleton);
    const el4 = document.createElement(WCTAG.Skeleton);
    const el5 = document.createElement(WCTAG.Skeleton);

    setAttr(args[WCATTR.Width], WCATTR.Width, el);
    setAttr(args[WCATTR.Shape], WCATTR.Shape, el);

    setAttr(18, WCATTR.Width, el2);
    setAttr(15, WCATTR.Width, el3);
    setAttr(14, WCATTR.Width, el4);
    setAttr(10, WCATTR.Width, el5);
    setAttr(SIZE.Large, WCATTR.Size, h);

    h.appendChild(el);
    h2.appendChild(el2);
    p.appendChild(el3);
    p2.appendChild(el4);
    p3.appendChild(el5);

    wrapper.style.display = 'grid';
    wrapper.style.gap = '0.5rem';

    wrapper.append(h, h2, p, p2, p3);

    return wrapper;
  };
}

export default {
  title: 'Components/Skeleton',
  tags: ['autodocs'],
  render: render(),
  argTypes: {
    [WCATTR.Width]: {
      control: { type: 'number' },
      type: {
        name: 'number',
      },
    },
    [WCATTR.Height]: {
      control: { type: 'number' },
      type: {
        name: 'number',
      },
    },
    [WCATTR.Shape]: {
      control: { type: 'inline-radio' },
      options: SHAPES,
      table: {
        defaultValue: { summary: SHAPE.Squircle },
        category: 'props',
      },
    },
  },
  args: {},
};

export const DefaultSkeleton = {
  args: {
    [WCATTR.Width]: 6,
    [WCATTR.Height]: 1,
    [WCATTR.Shape]: SHAPE.Squircle,
  },
};

export const TextSkeleton = {
  args: {
    [WCATTR.Width]: 6,
    [WCATTR.Height]: 1,
    [WCATTR.Shape]: SHAPE.Squircle,
  },
  render: renderWithText(),
};

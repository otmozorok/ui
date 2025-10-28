import { COLOR, COLORS, SHAPE, SHAPES, WCATTR, WCTAG } from '../../../consts/index.js';
import { setAttr } from '../../../utils/index.js';

export default {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Avatar);

    setAttr(args[WCATTR.SizeNumber], WCATTR.SizeNumber, el);
    setAttr(args[WCATTR.Color], WCATTR.Color, el);
    setAttr(args[WCATTR.Shape], WCATTR.Shape, el);

    if (args.text) {
      el.innerText = args.text;
    }

    return el;
  },
  argTypes: {
    text: {
      control: { type: 'text' },
      table: { category: 'other' },
    },
    [WCATTR.SizeNumber]: {
      control: { type: 'number' },
      table: {
        defaultValue: { summary: 3 },
        category: 'props',
      },
    },
    [WCATTR.Color]: {
      control: { type: 'inline-radio' },
      options: COLORS,
      table: {
        defaultValue: { summary: COLOR.Green },
        category: 'props',
      },
    },
    [WCATTR.Shape]: {
      control: { type: 'inline-radio' },
      options: SHAPES,
      table: {
        defaultValue: { summary: SHAPE.Circle },
        category: 'props',
      },
    },
  },
  args: {
    text: '',
    [WCATTR.SizeNumber]: 3,
    [WCATTR.Color]: COLOR.Green,
    [WCATTR.Shape]: SHAPE.Circle,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://embed.figma.com/design/txHhP4RIa7u0D9jsSAyjw3/UI?node-id=10-69&embed-host=share',
    },
  },
};

export const DefaultAvatar = {
  args: {
    [WCATTR.SizeNumber]: 3,
    [WCATTR.Color]: COLOR.Blue,
    [WCATTR.Shape]: SHAPE.Circle,
  },
};

export const WithImage = {
  args: {
    [WCATTR.SizeNumber]: 3,
  },
  render: (args) => {
    const el = document.createElement(WCTAG.Avatar);
    const img = document.createElement('img');

    img.src = 'https://avatars.githubusercontent.com/u/15306476?v=4';

    setAttr(args[WCATTR.SizeNumber], WCATTR.SizeNumber, el);
    setAttr(args[WCATTR.Color], WCATTR.Color, el);
    setAttr(args[WCATTR.Shape], WCATTR.Shape, el);

    el.appendChild(img);

    return el;
  },
};

export const WithText = {
  args: {
    text: 'BH',
    [WCATTR.SizeNumber]: 3,
    [WCATTR.Color]: COLOR.Green,
  },
};

export const BigAndSquircle = {
  args: {
    text: 'BH',
    [WCATTR.SizeNumber]: 5,
    [WCATTR.Color]: COLOR.Green,
    [WCATTR.Shape]: SHAPE.Squircle,
  },
};

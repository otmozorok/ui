import { COLOR, COLORS, SHAPE, SHAPES, WCATTR, WCTAG } from '../.shared/index.js';
import { setAttr } from '../.storybook/utils.js';

export default {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Avatar);

    setAttr(args[WCATTR.Src], WCATTR.Src, el);
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
      type: { name: 'string' },
    },
    [WCATTR.Src]: {
      control: { type: 'text' },
      type: { name: 'string' },
    },
    [WCATTR.SizeNumber]: {
      control: { type: 'number' },
      table: {
        defaultValue: { summary: 48 },
      },
    },
    [WCATTR.Color]: {
      control: { type: 'inline-radio' },
      type: {
        name: 'enum',
      },
      options: COLORS,
      table: {
        defaultValue: { summary: COLOR.Green },
      },
    },
    [WCATTR.Shape]: {
      control: { type: 'inline-radio' },
      type: {
        name: 'enum',
      },
      options: SHAPES,
      table: {
        defaultValue: { summary: SHAPE.Circle },
      },
    },
  },
  args: {
    text: '',
    [WCATTR.Src]:
      'https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg',
    [WCATTR.SizeNumber]: 48,
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
    [WCATTR.Src]: '',
    [WCATTR.SizeNumber]: 48,
    [WCATTR.Color]: COLOR.Green,
    [WCATTR.Shape]: SHAPE.Circle,
  },
};

export const WithImage = {
  args: {
    [WCATTR.Src]:
      'https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg',
    [WCATTR.SizeNumber]: 48,
  },
};

export const WithOutImage = {
  args: {
    text: 'BH',
    [WCATTR.Src]: '',
    [WCATTR.SizeNumber]: 48,
    [WCATTR.Color]: COLOR.Green,
  },
};

export const Big = {
  args: {
    text: 'BH',
    [WCATTR.Src]: '',
    [WCATTR.SizeNumber]: 65,
    [WCATTR.Color]: COLOR.Green,
    [WCATTR.Shape]: SHAPE.Squircle,
  },
};

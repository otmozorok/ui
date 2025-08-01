import { COLOR, COLORS, SHAPE, SHAPES, WCATTR, WCTAG } from '../.shared';
import { setAttr } from '../.storybook/utils';

export default {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Avatar);

    setAttr(args.src, WCATTR.Src, el);
    setAttr(args.size, WCATTR.SizeNumber, el);
    setAttr(args.color, WCATTR.Color, el);
    setAttr(args.shape, WCATTR.Shape, el);

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
    src: {
      control: { type: 'text' },
      type: { name: 'string' },
    },
    size: {
      control: { type: 'number' },
      table: {
        defaultValue: { summary: 48 },
      },
    },
    color: {
      control: { type: 'inline-radio' },
      type: {
        name: 'enum',
      },
      options: COLORS,
      table: {
        defaultValue: { summary: COLOR.Green },
      },
    },
    shape: {
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
    src: 'https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg',
    text: '',
    size: 48,
    color: COLOR.Green,
    shape: SHAPE.Circle,
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
    src: '',
    size: 48,
    color: COLOR.Green,
    shape: SHAPE.Circle,
  },
};

export const WithImage = {
  args: {
    src: 'https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg',
    size: 48,
  },
};

export const WithOutImage = {
  args: {
    src: '',
    text: 'BH',
    size: 48,
    color: COLOR.Green,
  },
};

export const Big = {
  args: {
    src: '',
    text: 'BH',
    size: 65,
    color: COLOR.Green,
    shape: SHAPE.Squircle,
  },
};

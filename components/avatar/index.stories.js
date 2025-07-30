import { COLOR, COLORS, WCTAG } from '../.shared';
import { setAttr } from '../.storybook/utils';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  render: (args) => {
    const el = document.createElement(WCTAG.Avatar);

    setAttr(args.src, 'src', el);
    setAttr(args.size, 'size', el);
    setAttr(args.color, 'color', el);

    if (args.children) {
      el.innerText = args.children;
    }

    return el;
  },
  argTypes: {
    children: {
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
  },
  args: {
    src: 'https://sun9-21.userapi.com/1N-rJz6-7hoTDW7MhpWe19e_R_TdGV6Wu5ZC0A/67o6-apnAks.jpg',
    size: 48,
    color: COLOR.Green,
  },
};

export const DefaultAvatar = {
  args: {
    src: '',
    size: 48,
    color: COLOR.Green,
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
    children: 'BH',
    size: 48,
    color: COLOR.Green,
  },
};

export const Big = {
  args: {
    src: '',
    children: 'BH',
    size: 65,
    color: COLOR.Green,
  },
};

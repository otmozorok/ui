import type { Meta, StoryObj } from '@storybook/vue3-vite';
import {
  SIZE,
  SIZES,
  APPEARANCES,
  MODES,
  APPEARANCE,
  MODE,
  WCATTR,
  COLORS,
  COLOR,
  SHAPES,
  SHAPE,
} from '@otmozorok/wc/consts';
import { fn } from 'storybook/test';
import { Avatar } from '.';
import { IAvatarProps } from '../model';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    sizeNumber: {
      control: 'number',
      table: { defaultValue: { summary: '3' } },
    },
    [WCATTR.Color]: {
      control: 'inline-radio',
      options: COLORS,
      table: { defaultValue: { summary: COLOR.Blue } },
    },
    [WCATTR.Shape]: {
      control: 'inline-radio',
      options: SHAPES,
      table: { defaultValue: { summary: SHAPE.Circle } },
    },
    default: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultAvatar: Story = {
  args: {
    sizeNumber: 3,
    [WCATTR.Color]: COLOR.Blue,
    [WCATTR.Shape]: SHAPE.Circle,
    default: 'BH',
  },
};

export const WithImage: Story = {
  args: {
    sizeNumber: 3,
    [WCATTR.Color]: COLOR.Blue,
    [WCATTR.Shape]: SHAPE.Circle,
  },
  render: (args) => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: `
      <Avatar v-bind="args">
        <img src="https://avatars.githubusercontent.com/u/15306476?v=4"  />
      </Avatar>
    `,
  }),
};

export const WithText: Story = {
  args: {
    sizeNumber: 3,
    [WCATTR.Color]: COLOR.Green,
    [WCATTR.Shape]: SHAPE.Circle,
    default: 'BH',
  },
};

export const BigAndSquircle: Story = {
  args: {
    sizeNumber: 5,
    [WCATTR.Color]: COLOR.Green,
    [WCATTR.Shape]: SHAPE.Squircle,
    default: 'BH',
  },
};

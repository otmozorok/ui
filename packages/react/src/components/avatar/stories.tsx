import type { Meta, StoryObj } from '@storybook/react-vite';
import { COLOR, COLORS, SHAPE, SHAPES } from '@otmozorok/wc';
import { Avatar, type IAvatarProps } from '.';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    sizeNumber: { control: 'number', table: { defaultValue: { summary: '48' } } },
    color: {
      control: 'inline-radio',
      options: COLORS,
      table: { defaultValue: { summary: COLOR.Green } },
    },
    shape: {
      control: 'inline-radio',
      options: SHAPES,
      table: { defaultValue: { summary: SHAPE.Circle } },
    },
    src: { control: 'text' },
    children: { control: 'text' },
  },
} satisfies Meta<IAvatarProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultAvatar: Story = {
  args: {
    sizeNumber: 48,
    color: COLOR.Green,
    shape: SHAPE.Circle,
  },
  render: ({ ...props }) => {
    return <Avatar {...props} />;
  },
};

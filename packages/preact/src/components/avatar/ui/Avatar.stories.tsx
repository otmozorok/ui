import type { Meta, StoryObj } from '@storybook/preact-vite';
import { COLOR, COLORS, SHAPE, SHAPES, WCATTR } from '@otmozorok/wc/consts';
import { Avatar } from './Avatar';
import { IAvatarProps } from '../model';

type IMeta = IAvatarProps & { text: string; src: string };

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    sizeNumber: {
      control: { type: 'number' },
      table: {
        defaultValue: { summary: '3' },
      },
    },
    [WCATTR.Color]: {
      control: { type: 'inline-radio' },
      options: COLORS,
      table: {
        defaultValue: { summary: COLOR.Green },
      },
    },
    [WCATTR.Shape]: {
      control: { type: 'inline-radio' },
      options: SHAPES,
      table: {
        defaultValue: { summary: SHAPE.Circle },
      },
    },
    text: {
      control: {
        type: 'text',
      },
    },
    [WCATTR.Src]: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultAvatar: Story = {
  args: {
    sizeNumber: 3,
    [WCATTR.Color]: COLOR.Blue,
    [WCATTR.Shape]: SHAPE.Circle,
  },
  render: ({ text, src, ...props }) => {
    const children = src ? <img src={src} /> : text ? text : undefined;
    return <Avatar {...props}>{children}</Avatar>;
  },
};

export const WithImage: Story = {
  args: {
    sizeNumber: 3,
    [WCATTR.Src]: 'https://avatars.githubusercontent.com/u/15306476?v=4',
  },
  render: ({ src, ...props }) => {
    return (
      <Avatar {...props}>
        <img src={src} />
      </Avatar>
    );
  },
};

export const WithText: Story = {
  args: {
    text: 'BH',
    sizeNumber: 3,
    [WCATTR.Color]: COLOR.Green,
  },
  render: ({ text, ...props }) => {
    return <Avatar {...props}>{text}</Avatar>;
  },
};

export const BigAndSquircle: Story = {
  args: {
    text: 'BH',
    sizeNumber: 5,
    [WCATTR.Color]: COLOR.Green,
    [WCATTR.Shape]: SHAPE.Squircle,
  },
  render: ({ text, ...props }) => {
    return <Avatar {...props}>{text}</Avatar>;
  },
};

export default meta;

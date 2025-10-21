import type { Meta, StoryObj } from '@storybook/react-vite';
import { COLOR, COLORS, SHAPE, SHAPES, WCATTR } from '@otmozorok/wc/consts';
import { Avatar } from './Avatar';
import type { IAvatarProps } from '../model';

type IMeta = IAvatarProps & { src?: string; text?: string };

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    sizeNumber: { control: 'number', table: { defaultValue: { summary: '3' } } },
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
    text: { control: 'text' },
  },
} satisfies Meta<IMeta>;

export default meta;
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

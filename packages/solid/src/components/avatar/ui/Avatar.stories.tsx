import { COLOR, COLORS, SHAPE, SHAPES } from '@otmozorok/wc/consts';
import { IAvatarProps } from '../model';
import { Avatar } from './Avatar';
import type { ParentComponent } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

type IMetaWithText = ParentComponent<IAvatarProps & { src?: string }>;

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'inline-radio',
      options: COLORS,
      table: {
        defaultValue: {
          summary: COLOR.Blue,
        },
      },
    },
    shape: {
      control: 'inline-radio',
      options: SHAPES,
      table: {
        defaultValue: {
          summary: SHAPE.Circle,
        },
      },
    },
    sizeNumber: {
      control: 'number',
      table: {
        defaultValue: {
          summary: '3',
        },
      },
    },
  },
} satisfies Meta<IMetaWithText>;

type Story = StoryObj<IMetaWithText>;

export const DefaultAvatar: Story = {
  args: {
    color: COLOR.Blue,
    shape: SHAPE.Circle,
    sizeNumber: 3,
    children: 'BH',
  },
  render: (props) => {
    return <Avatar {...props}>{props.children}</Avatar>;
  },
};

export const WithImage: Story = {
  args: {
    sizeNumber: 3,
    src: 'https://avatars.githubusercontent.com/u/15306476?v=4',
  },
  render: (props) => {
    return (
      <Avatar {...props}>
        <img src={props.src} />
      </Avatar>
    );
  },
};

export const WithText: Story = {
  args: {
    children: 'BH',
    sizeNumber: 3,
    color: COLOR.Green,
  },
  render: (props) => {
    return <Avatar {...props}>{props.children}</Avatar>;
  },
};

export const BigAndSquircle: Story = {
  args: {
    children: 'BH',
    sizeNumber: 5,
    color: COLOR.Green,
    shape: SHAPE.Squircle,
  },
  render: (props) => {
    return <Avatar {...props}>{props.children}</Avatar>;
  },
};

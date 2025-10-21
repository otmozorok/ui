import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Avatar } from './Avatar';
import { COLOR, COLORS, SHAPE, SHAPES, WCATTR } from '@otmozorok/wc/consts';
import { IAvatarProps } from '../model';

type IMetaWithText = IAvatarProps & { text?: string; src?: string };

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    [WCATTR.Color]: {
      control: 'inline-radio',
      options: COLORS,
      table: {
        defaultValue: {
          summary: COLOR.Blue,
        },
      },
    },
    [WCATTR.Shape]: {
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
    [WCATTR.Color]: COLOR.Blue,
    [WCATTR.Shape]: SHAPE.Circle,
    sizeNumber: 3,
    text: 'BH',
  },
  render: (props) => {
    const { text } = props;
    return <Avatar {...props}>{text}</Avatar>;
  },
};

export const WithImage: Story = {
  args: {
    sizeNumber: 3,
    src: 'https://avatars.githubusercontent.com/u/15306476?v=4',
  },
  render: (props) => {
    const { src } = props;
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
  render: (props) => {
    const { text } = props;
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
  render: (props) => {
    const { text } = props;
    return <Avatar {...props}>{text}</Avatar>;
  },
};

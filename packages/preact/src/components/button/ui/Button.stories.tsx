import { APPEARANCES, MODE, MODES, SIZE, SIZES } from '@otmozorok/wc/consts';
import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/preact-vite';
import { Button } from './Button';
import { IButtonProps } from '../model';

type IMeta = IButtonProps & { text?: string };

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'inline-radio', options: MODES },
    appearance: { control: 'inline-radio', options: APPEARANCES },
    size: {
      control: 'inline-radio',
      options: SIZES,
    },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultButton: Story = {
  args: {
    mode: MODE.Primary,
    size: SIZE.Medium,
    fullWidth: true,
    text: 'Button',
  },
  render: ({ text, ...props }) => {
    return <Button {...props}>{text}</Button>;
  },
};

export default meta;

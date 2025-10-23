import { APPEARANCES, MODE, MODES, SIZE, SIZES } from '@otmozorok/wc/consts';
import { fn } from 'storybook/test';
import { Button } from './Button';
import type { IButtonProps } from '../model';
import type { Meta, StoryObj } from '@storybook/react-vite';

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
    children: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<IButtonProps>;

type Story = StoryObj<IButtonProps>;

export const Primary: Story = {
  args: {
    mode: MODE.Primary,
    size: SIZE.Medium,
    fullWidth: true,
    children: 'Нажимать на меня',
  },
  render: ({ children, ...props }) => {
    return <Button {...props}>{children}</Button>;
  },
};

export default meta;

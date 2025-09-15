import { MODE, MODES, SIZE, SIZES } from '@otmozorok/wc/consts';
import { Button, type IButtonProps } from './Button';
import type { Meta, StoryObj } from '@storybook/preact-vite';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'inline-radio', options: MODES },
    fullwidth: { control: 'boolean' },
    size: {
      control: 'inline-radio',
      options: SIZES,
    },
  },
  args: {
    mode: MODE.Primary,
    children: 'Button',
    fullwidth: true,
    size: SIZE.Medium,
  },
} satisfies Meta<IButtonProps>;

type Story = StoryObj<IButtonProps>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    mode: MODE.Primary,
    children: 'Button',
    fullwidth: false,
    size: SIZE.Medium,
  },
};

export default meta;

import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { SIZE } from '@otmozorok/wc/consts';
import { Button } from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    default: {
      control: {
        type: 'text',
      },
    },
  },
  args: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: SIZE.Medium,
    default: 'Button',
  },
};

import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { SIZE, SIZES, APPEARANCES, MODES, APPEARANCE, MODE, WCATTR } from '@otmozorok/wc/consts';
import { fn } from 'storybook/test';
import { Button } from '.';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    [WCATTR.Size]: {
      control: 'inline-radio',
      options: SIZES,
      table: { defaultValue: { summary: SIZE.Medium } },
    },
    [WCATTR.Appearance]: {
      control: 'inline-radio',
      options: APPEARANCES,
      table: { defaultValue: { summary: APPEARANCE.Themed } },
    },
    [WCATTR.Mode]: {
      control: 'inline-radio',
      options: MODES,
      table: { defaultValue: { summary: MODE.Primary } },
    },
    [WCATTR.Loading]: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    default: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    [WCATTR.Size]: SIZE.Medium,
    [WCATTR.Appearance]: APPEARANCE.Themed,
    [WCATTR.Mode]: MODE.Primary,
    default: 'Нажимать на меня',
  },
};

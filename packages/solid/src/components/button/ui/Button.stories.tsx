import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { fn } from 'storybook/test';

import { Button } from './Button';
import { APPEARANCE, APPEARANCES, MODE, MODES, SIZE, SIZES, WCATTR } from '@otmozorok/wc/consts';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    [WCATTR.Appearance]: {
      control: 'inline-radio',
      options: APPEARANCES,
      table: {
        defaultValue: {
          summary: APPEARANCE.Themed,
        },
      },
    },
    [WCATTR.Mode]: {
      control: 'inline-radio',
      options: MODES,
      table: {
        defaultValue: {
          summary: MODE.Primary,
        },
      },
    },
    [WCATTR.Size]: {
      control: 'inline-radio',
      options: SIZES,
      table: {
        defaultValue: {
          summary: SIZE.Medium,
        },
      },
    },
    [WCATTR.Loading]: { control: 'boolean' },
    [WCATTR.FullWidth]: { control: 'boolean' },
  },
  args: { 'on:click': fn() },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    [WCATTR.Mode]: MODE.Primary,
    [WCATTR.Size]: SIZE.Medium,
    children: 'Button',
  },
  render: (args) => {
    return <Button {...args} />;
  },
};

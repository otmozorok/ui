import { APPEARANCE, APPEARANCES, MODE, MODES, SIZE, SIZES } from '@otmozorok/wc/consts';
import { fn } from 'storybook/test';
import { IButtonProps } from '../model';
import { Button } from './Button';
import type { ParentComponent } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'inline-radio',
      options: APPEARANCES,
      table: {
        defaultValue: {
          summary: APPEARANCE.Themed,
        },
      },
    },
    mode: {
      control: 'inline-radio',
      options: MODES,
      table: {
        defaultValue: {
          summary: MODE.Primary,
        },
      },
    },
    size: {
      control: 'inline-radio',
      options: SIZES,
      table: {
        defaultValue: {
          summary: SIZE.Medium,
        },
      },
    },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: { 'on:click': fn() },
} satisfies Meta<ParentComponent<IButtonProps>>;

type Story = StoryObj<ParentComponent<IButtonProps>>;

export const DefaultButton: Story = {
  args: {
    appearance: APPEARANCE.Themed,
    mode: MODE.Primary,
    size: SIZE.Medium,
    children: 'Нажимать на меня',
  },
  render: (args) => {
    return <Button {...args} />;
  },
};

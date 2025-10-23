import { APPEARANCE, APPEARANCES, MODE, MODES, SIZE, SIZES, WCATTR } from '@otmozorok/wc/consts';
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
    fullWidth: { control: 'boolean' },
  },
  args: { 'on:click': fn() },
} satisfies Meta<ParentComponent<IButtonProps>>;

type Story = StoryObj<ParentComponent<IButtonProps>>;

export const DefaultButton: Story = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    [WCATTR.Mode]: MODE.Primary,
    [WCATTR.Size]: SIZE.Medium,
    children: 'Нажимать на меня',
  },
  render: (args) => {
    return <Button {...args} />;
  },
};

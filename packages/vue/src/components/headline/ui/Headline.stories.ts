import { APPEARANCE, SIZE, SIZES, APPEARANCES, WCATTR } from '@otmozorok/wc/consts';
import { Headline } from '.';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

type IMeta = typeof Headline;

export default {
  title: 'Typography/Headline',
  component: Headline,
  tags: ['autodocs'],
  argTypes: {
    [WCATTR.Appearance]: {
      control: 'inline-radio',
      options: APPEARANCES,
      table: { defaultValue: { summary: APPEARANCE.Themed } },
    },
    [WCATTR.Size]: {
      control: 'inline-radio',
      options: SIZES,
      table: { defaultValue: { summary: SIZE.Medium } },
    },
    [WCATTR.Caps]: {
      control: 'boolean',
    },
    default: { control: 'text' },
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultHeadline: Story = {
  args: {
    [WCATTR.Size]: SIZE.Medium,
    [WCATTR.Appearance]: APPEARANCE.Themed,
    default: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
};

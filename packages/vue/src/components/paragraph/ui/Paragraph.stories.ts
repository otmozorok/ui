import { APPEARANCE, APPEARANCES } from '@otmozorok/wc/consts';
import { Paragraph } from '.';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

type IMeta = typeof Paragraph;

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      control: 'inline-radio',
      options: APPEARANCES,
      table: { defaultValue: { summary: APPEARANCE.Themed } },
    },
    caps: {
      control: 'boolean',
    },
    default: { control: 'text' },
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultParagraph: Story = {
  args: {
    appearance: APPEARANCE.Themed,
    default: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
};

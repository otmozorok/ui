import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { APPEARANCE, SIZE, SIZES, APPEARANCES, WCATTR } from '@otmozorok/wc/consts';
import { Headline } from '.';

const meta = {
  title: 'Typography/Headline',
  component: Headline,
  tags: ['autodocs'],
  argTypes: {
    default: { control: 'text' },
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
  },
} satisfies Meta<typeof Headline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    [WCATTR.Size]: SIZE.Medium,
    [WCATTR.Appearance]: APPEARANCE.Themed,
    default: 'Заголовок',
  },
};

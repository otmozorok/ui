import type { Meta, StoryObj } from '@storybook/react-vite';
import { Headline } from './Headline';
import { APPEARANCE, APPEARANCES, SIZE, SIZES } from '@otmozorok/wc/consts';
import type { IHeadlineProps } from '../model';

type IMeta = IHeadlineProps & { text?: string };

const meta = {
  title: 'Typography/Headline',
  component: Headline,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    appearance: {
      control: 'inline-radio',
      options: APPEARANCES,
      table: { defaultValue: { summary: APPEARANCE.Themed } },
    },
    size: {
      control: 'inline-radio',
      options: SIZES,
      table: { defaultValue: { summary: SIZE.Medium } },
    },
    caps: {
      control: 'boolean',
    },
  },
} satisfies Meta<IMeta>;

export default meta;
type Story = StoryObj<IMeta>;

export const DefaultHeadline: Story = {
  args: {
    text: 'Съешь ещё этих мягких французских булок, да выпей чаю',
    appearance: APPEARANCE.Themed,
    size: SIZE.Medium,
  },
  render: ({ text, ...props }) => {
    return <Headline {...props}>{text}</Headline>;
  },
};

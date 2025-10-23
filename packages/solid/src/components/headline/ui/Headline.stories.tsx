import { APPEARANCE, APPEARANCES, SIZE, SIZES } from '@otmozorok/wc/consts';
import { Headline } from './Headline';
import type { IHeadlineProps } from '../model';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

type IMeta = IHeadlineProps & { text?: string };

export default {
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

type Story = StoryObj<IMeta>;

export const DefaultHeadline: Story = {
  args: {
    text: 'Съешь ещё этих мягких французских булок, да выпей чаю',
    appearance: APPEARANCE.Themed,
    size: SIZE.Medium,
  },
  render: (props) => {
    const { text } = props;
    return <Headline {...props}>{text}</Headline>;
  },
};

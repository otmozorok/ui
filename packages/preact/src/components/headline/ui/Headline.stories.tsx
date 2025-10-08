import type { Meta, StoryObj } from '@storybook/preact-vite';
import { APPEARANCE, APPEARANCES, SIZE, SIZES, WCATTR } from '@otmozorok/wc/consts';
import { IHeadlineProps } from '../model';
import { Headline } from './Headline';

type IMeta = IHeadlineProps & { text?: string };

const meta = {
  title: 'Typography/Headline',
  component: Headline,
  tags: ['autodocs'],
  argTypes: {
    [WCATTR.Caps]: { control: 'boolean' },
    [WCATTR.Appearance]: { control: 'inline-radio', options: APPEARANCES },
    [WCATTR.Size]: {
      control: 'inline-radio',
      options: SIZES,
    },
  },
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    [WCATTR.Size]: SIZE.Medium,
    text: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const Primary: Story = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    [WCATTR.Size]: SIZE.Medium,
    text: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: ({ text, ...props }) => {
    return <Headline {...props}>{text}</Headline>;
  },
};

export default meta;

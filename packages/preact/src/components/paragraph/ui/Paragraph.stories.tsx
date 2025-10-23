import { APPEARANCE, APPEARANCES, WCATTR } from '@otmozorok/wc/consts';
import { IParagraphProps } from '../model';
import { Paragraph } from './Paragraph';
import type { Meta, StoryObj } from '@storybook/preact-vite';

type IMeta = IParagraphProps & { text?: string };

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    [WCATTR.Caps]: { control: 'boolean' },
    [WCATTR.Appearance]: { control: 'inline-radio', options: APPEARANCES },
  },
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    text: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const Primary: Story = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    text: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: ({ text, ...props }) => {
    return <Paragraph {...props}>{text}</Paragraph>;
  },
};

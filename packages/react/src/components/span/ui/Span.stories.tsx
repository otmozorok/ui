import type { Meta, StoryObj } from '@storybook/react-vite';
import { APPEARANCE, APPEARANCES, WCATTR } from '@otmozorok/wc/consts';
import type { ISpanProps } from '../model';
import { Span } from './Span';

type IMeta = ISpanProps & { text?: string };

const meta = {
  title: 'Typography/Span',
  component: Span,
  tags: ['autodocs'],
  argTypes: {
    [WCATTR.Caps]: { control: 'boolean' },
    [WCATTR.Appearance]: { control: 'inline-radio', options: APPEARANCES },
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultSpan: Story = {
  args: {
    [WCATTR.Appearance]: APPEARANCE.Themed,
    text: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: ({ text, ...props }) => {
    return <Span {...props}>{text}</Span>;
  },
};

export default meta;

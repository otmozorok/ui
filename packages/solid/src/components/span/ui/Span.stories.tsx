import { APPEARANCE, APPEARANCES } from '@otmozorok/wc/consts';
import { Span } from './Span';
import type { ISpanProps } from '../model';
import type { ParentComponent } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs-vite';

type IMeta = ParentComponent<ISpanProps>;

export default {
  title: 'Typography/Span',
  component: Span,
  tags: ['autodocs'],
  argTypes: {
    caps: { control: 'boolean' },
    appearance: { control: 'inline-radio', options: APPEARANCES },
  },
} satisfies Meta<IMeta>;

type Story = StoryObj<IMeta>;

export const DefaultSpan: Story = {
  args: {
    appearance: APPEARANCE.Themed,
    children: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  },
  render: (props) => {
    return <Span {...props}>{props.children}</Span>;
  },
};
